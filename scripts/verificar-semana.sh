#!/usr/bin/env bash
#
# verificar-semana.sh — autograding declarativo del bootcamp.
#
# Uso:
#   ./scripts/verificar-semana.sh --doctor   comprueba tu entorno
#   PROYECTO=~/mi-proyecto ./scripts/verificar-semana.sh 05
#                                            comprueba tu carpeta de proyecto
#   ./scripts/verificar-semana.sh 05         comprueba 3-proyecto/starter
#   ENTREGA=solution ./scripts/verificar-semana.sh 05
#                                            comprueba la solucion de referencia
#                                            (repo privado bc-instructor; ruta en
#                                            BC_INSTRUCTOR, por defecto ../bc-instructor)
#
# Este script no sabe nada de ninguna semana en concreto: lee las
# comprobaciones de bootcamp/week-NN-*/checks.json y las ejecuta. Si necesitas
# logica especifica de una semana, el sitio es el checks.json, nunca este
# archivo. El contrato completo esta en docs/autograding.md.

set -euo pipefail

RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$RAIZ"

rojo()  { printf '\033[0;31m%s\033[0m\n' "$*"; }
verde() { printf '\033[0;32m%s\033[0m\n' "$*"; }
gris()  { printf '\033[0;90m%s\033[0m\n' "$*"; }

# ---------------------------------------------------------------------------
# --doctor: comprueba las dependencias antes de culpar al material
# ---------------------------------------------------------------------------
doctor() {
  local fallos=0

  comprobar() {
    if [[ "$2" == ok ]]; then
      printf '  \033[0;32m✅\033[0m %-8s %s\n' "$1" "$3"
    else
      printf '  \033[0;31m❌\033[0m %-8s %s\n' "$1" "$3"
      fallos=$(( fallos + 1 ))
    fi
  }

  echo "Obligatorio:"
  for herramienta in bash git jq node pnpm; do
    if command -v "$herramienta" >/dev/null 2>&1; then
      comprobar "$herramienta" ok "$("$herramienta" --version 2>&1 | head -1)"
    else
      comprobar "$herramienta" no "no instalado (docs/stack-versions.md)"
    fi
  done


  echo
  if (( fallos == 0 )); then
    verde "Entorno minimo listo."
    return 0
  fi
  rojo "$fallos comprobacion(es) obligatorias fallaron."
  return 1
}

# ---------------------------------------------------------------------------
# Evaluacion de una asercion
#   exit0        el comando sale con 0
#   exit!=0      el comando sale distinto de 0
#   exit=N       el comando sale exactamente con N
#   stdout~RE    la salida casa con la expresion regular extendida RE
#   stdout!~RE   la salida NO casa con RE
# ---------------------------------------------------------------------------
evaluar() {
  local asercion="$1" codigo="$2" salida="$3"

  case "$asercion" in
    exit0)       [[ "$codigo" -eq 0 ]] ;;
    "exit!=0")   [[ "$codigo" -ne 0 ]] ;;
    exit=*)      [[ "$codigo" -eq "${asercion#exit=}" ]] ;;
    "stdout!~"*) ! grep -qE "${asercion#stdout!~}" <<<"$salida" ;;
    stdout~*)    grep -qE "${asercion#stdout~}" <<<"$salida" ;;
    *)
      rojo "ASERCION DESCONOCIDA: '$asercion'"
      gris "Validas: exit0, exit!=0, exit=N, stdout~RE, stdout!~RE"
      return 2
      ;;
  esac
}

# ---------------------------------------------------------------------------
# Ejecucion de una semana
# ---------------------------------------------------------------------------
verificar_semana() {
  local semana="$1"

  if ! [[ "$semana" =~ ^[0-9]{2}$ ]]; then
    rojo "La semana se indica con dos digitos: 01, 02 ... 28"
    exit 1
  fi

  if ! command -v jq >/dev/null 2>&1; then
    rojo "Falta jq. Es obligatorio para leer checks.json."
    exit 1
  fi

  local dir
  dir=$(find "$RAIZ/bootcamp" -maxdepth 1 -type d -name "week-${semana}-*" | head -1)
  if [[ -z "$dir" ]]; then
    rojo "No existe la carpeta de la Semana $semana."
    exit 1
  fi

  local archivo="$dir/checks.json"
  if [[ ! -f "$archivo" ]]; then
    rojo "La Semana $semana todavia no tiene checks.json."
    gris "Se escribe antes que el proyecto: ver docs/autograding.md"
    exit 1
  fi

  if ! jq -e . "$archivo" >/dev/null 2>&1; then
    rojo "checks.json invalido: $archivo"
    exit 1
  fi

  # El estudiante apunta PROYECTO a su carpeta; sin el, starter/ del bootcamp.
  # La solucion de referencia vive fuera del bootcamp, en bc-instructor.
  local proyecto="${PROYECTO:-$dir/3-proyecto/starter}"
  if [[ -z "${PROYECTO:-}" && "${ENTREGA:-starter}" == solution ]]; then
    proyecto="${BC_INSTRUCTOR:-$RAIZ/../bc-instructor}/bc-javascript-es2023/$(basename "$dir")/3-proyecto/solution"
  fi
  if [[ ! -d "$proyecto" ]]; then
    rojo "No existe el proyecto a verificar: $proyecto"
    exit 1
  fi
  proyecto=$(cd "$proyecto" && pwd)

  echo "Semana $semana — $(jq -r '.titulo' "$archivo")"
  gris "Proyecto: $proyecto"
  echo

  local total=0 pasados=0
  local _id descripcion cmd asercion pista codigo salida

  while IFS=$'\t' read -r _id descripcion cmd asercion pista; do
    total=$(( total + 1 ))

    # @tsv escribe cada \ como \\: se deshace para que el cmd llegue tal cual está en el JSON.
    cmd=${cmd//\\\\/\\}

    # Los marcadores dejan el checks.json independiente de rutas y plataforma.
    cmd=${cmd//\{semana\}/$dir}
    cmd=${cmd//\{raiz\}/$RAIZ}
    cmd=${cmd//\{proyecto\}/$proyecto}

    # `if` alrededor: con `set -e`, capturar el codigo de un comando que falla
    # a proposito requiere que la ejecucion este en un contexto condicional.
    if salida=$(bash -c "$cmd" 2>&1 </dev/null); then codigo=0; else codigo=$?; fi

    if evaluar "$asercion" "$codigo" "$salida"; then
      printf '  \033[0;32m✅\033[0m %s\n' "$descripcion"
      pasados=$(( pasados + 1 ))
    else
      printf '  \033[0;31m❌\033[0m %s\n' "$descripcion"
      printf '     \033[0;90mpista: %s\033[0m\n' "$pista"
    fi
  done < <(jq -r '.checks[] | [.id, .descripcion, .cmd, .assert, .pista] | @tsv' "$archivo")

  echo
  if (( pasados == total )); then
    verde "$pasados/$total comprobaciones superadas."
    return 0
  fi
  rojo "$pasados/$total comprobaciones superadas."
  gris "Cada pista dice en qué archivo y en qué paso se arregla."
  return 1
}

case "${1:-}" in
  --doctor)      doctor ;;
  -h|--help|"")  sed -n '3,18p' "${BASH_SOURCE[0]}" | sed 's|^# \?||' ;;
  *)             verificar_semana "$1" ;;
esac
