#!/usr/bin/env bash
# Escribe al pie de cada documento de una semana la tabla de navegación
# "← Anterior | Siguiente →", en el orden de lectura de la semana:
#   teoría → índice de labs → labs → proyecto → rúbrica → recursos → glosario
# El README de la semana ya tiene su propia navegación entre semanas; aquí
# solo se corrige su "Siguiente" si la semana siguiente ya existe.
#
# Es idempotente: el bloque va entre <!-- nav --> y el final del archivo, y se
# reescribe en cada ejecución. Los README de starter/ y solution/ no se tocan:
# son el README del proyecto del estudiante, no documentación del curso.
#
# Uso: scripts/generar-navegacion.sh NN [NN...]
# Salida: 0 bien, 2 uso incorrecto o semana inexistente.
set -euo pipefail
cd "$(dirname "$0")/.."

[[ $# -ge 1 ]] || { echo "uso: generar-navegacion.sh NN [NN...]" >&2; exit 2; }

# Primer título "# ..." del archivo, sin la almohadilla.
title_of() { sed -n 's/^# //p;T;q' "$1"; }

# Etiqueta corta según el tipo de documento.
label_of() {
  local f=$1 t
  t=$(title_of "$f")
  case "$f" in
    */README.md) [[ $f == bootcamp/week-*/README.md && $f != */*/*/README.md ]] && { echo "$t"; return; } ;;
  esac
  case "$f" in
    */1-teoria/*)       echo "Teoría — ${t}" ;;
    */2-practicas/README.md) echo "Índice de labs" ;;
    */2-practicas/lab-*|*/2-practicas/ejercicio-*) echo "$t" ;;
    */3-proyecto/README.md)  echo "Proyecto — ${t#Proyecto Semana [0-9][0-9] — }" ;;
    */rubrica-evaluacion.md) echo "Rúbrica de evaluación" ;;
    */ebooks-free/*)    echo "Recursos — ebooks" ;;
    */videografia/*)    echo "Recursos — videos" ;;
    */webgrafia/*)      echo "Recursos — web" ;;
    */5-glosario/*)     echo "Glosario" ;;
    *)                  echo "$t" ;;
  esac
}

# Quita el pie viejo: el bloque <!-- nav --> y, si quedaron al final, las
# líneas "Sigue con [...]", "[← Volver a ...]" y separadores sueltos.
strip_footer() {
  local f=$1 tmp
  tmp=$(mktemp)
  awk '/^<!-- nav -->$/ {exit} {print}' "$f" \
    | awk '{ l[NR]=$0 } END {
        n=NR
        while (n>0 && (l[n] ~ /^[[:space:]]*$/ || l[n] ~ /^---$/ || l[n] ~ /^Sigue con \[/ || l[n] ~ /^\[← Volver a /)) n--
        for (i=1;i<=n;i++) print l[i]
      }' > "$tmp"
  mv "$tmp" "$f"
}

link() {  # link DESDE HACIA -> [etiqueta](ruta relativa)
  local rel
  rel=$(realpath --relative-to="$(dirname "$1")" "$2")
  printf '[%s](%s)' "$3" "$rel"
}

for nn in "$@"; do
  week=$(ls -d bootcamp/week-"$nn"-* 2>/dev/null | head -1)
  [[ -n $week ]] || { echo "no existe la semana $nn" >&2; exit 2; }
  next_nn=$(printf '%02d' $((10#$nn + 1)))
  next_week=$(ls -d bootcamp/week-"$next_nn"-* 2>/dev/null | head -1 || true)
  readme="$week/README.md"

  docs=()
  for f in "$week"/1-teoria/*.md "$week/2-practicas/README.md" "$week"/2-practicas/lab-*/README.md "$week"/2-practicas/ejercicio-*/README.md \
           "$week/3-proyecto/README.md" "$week/rubrica-evaluacion.md" \
           "$week/4-recursos/ebooks-free/README.md" "$week/4-recursos/videografia/README.md" \
           "$week/4-recursos/webgrafia/README.md" "$week/5-glosario/README.md"; do
    [[ -f $f ]] && docs+=("$f")
  done

  for i in "${!docs[@]}"; do
    f=${docs[$i]}
    if (( i == 0 )); then prev=$readme; else prev=${docs[$((i - 1))]}; fi
    if (( i + 1 < ${#docs[@]} )); then nxt=${docs[$((i + 1))]}
    elif [[ -n $next_week && -f $next_week/README.md ]]; then nxt=$next_week/README.md
    else nxt=""; fi

    prev_cell="← $(link "$f" "$prev" "$(label_of "$prev")")"
    if [[ -n $nxt ]]; then next_cell="$(link "$f" "$nxt" "$(label_of "$nxt")") →"; else next_cell="—"; fi

    strip_footer "$f"
    {
      printf '\n<!-- nav -->\n---\n\n## 🔗 Navegación\n\n'
      printf '| Anterior | Siguiente |\n|---|---|\n| %s | %s |\n\n' "$prev_cell" "$next_cell"
      printf '%s\n' "$(link "$f" "$readme" "↑ Semana $nn")"
    } >> "$f"
  done

  # README de la semana: "Siguiente" con enlace si la semana ya existe.
  if [[ -n $next_week && -f $next_week/README.md ]]; then
    next_title=$(title_of "$next_week/README.md")
    next_title=${next_title#Semana [0-9][0-9] — }
    sed -i -E "/^\| \[← Semana/ s#\| ([^|[]+) \|\$#| [Semana $next_nn — $next_title →](../$(basename "$next_week")/README.md) |#" "$readme"
  fi
done
