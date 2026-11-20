#!/usr/bin/env bash
# Verifica la integridad estructural del bootcamp:
#   1. Nombres de carpeta week-NN-slug y lab-NN-slug bien formados.
#   2. Enlaces relativos en markdown que resuelven a una ruta real.
#   3. Seccion "Navegacion" en el README de cada semana publicada y tabla
#      anterior/siguiente al pie del resto de sus documentos.
#   4. Diagramas de 0-assets/: solo SVG (ningun .md) y cada SVG enlazado
#      desde algun .md.
#   5. checks.json valido como JSON.
#   6. Todo .sh con shebang `env bash`, `set -euo pipefail` y bit de ejecucion.
#   7. Reglas de estilo del curso (CLAUDE.md): sin pip, npm, MySQL ni voseo;
#      SVG sin degradados y con fuente sans-serif.
#   8. Los scripts bash de los starter/ de semanas publicadas parsean
#      (`bash -n`). El codigo de cada lenguaje lo valida su checks.json.
#
# Las comprobaciones 3 y 8 solo se aplican a las semanas
# marcadas con ✅ en bootcamp/README.md: las semanas 🟡 (S01-S22, estructura
# anterior) fallarian por diseno hasta migrarlas.
#
# Uso: scripts/verificar-enlaces.sh
# Salida: lista de problemas encontrados; exit code 1 si hay al menos uno.

set -u
cd "$(dirname "$0")/.." || exit 1

fail=0

# Semanas ya refactorizadas, segun el indice de bootcamp/README.md.
publicadas=$(grep -oE '^\| \[[0-9]{2}\]\(([a-z0-9_-]+)/README\.md\).*\| ✅ \|$' bootcamp/README.md 2>/dev/null \
             | sed -E 's/^\| \[[0-9]{2}\]\(([a-z0-9_-]+)\/README\.md\).*/\1/')

esta_publicada() {
  # $1 = ruta que contiene el slug de la semana
  local ruta="$1" slug
  for slug in $publicadas; do
    case "$ruta" in *"$slug"*) return 0 ;; esac
  done
  return 1
}

if [ -z "$publicadas" ]; then
  echo "AVISO: ninguna semana marcada como ✅ en bootcamp/README.md."
  echo "       Se omiten las comprobaciones 3 y 8."
fi

echo "== 1. Nombres de carpeta =="
while IFS= read -r d; do
  name=$(basename "$d")
  if ! [[ "$name" =~ ^week-[0-9]{2}-[a-z0-9_]+$ ]]; then
    echo "NOMBRE INVALIDO (week): $d"
    fail=1
  fi
done < <(find bootcamp -mindepth 1 -maxdepth 1 -type d -iname "week-*")
# lab-NN-slug es obligatorio en semanas publicadas; las 🟡 usan ejercicio-NN-slug.
while IFS= read -r d; do
  name=$(basename "$d")
  if ! [[ "$name" =~ ^lab-[0-9]{2}-[a-z0-9-]+$ ]]; then
    echo "NOMBRE INVALIDO (lab): $d"
    fail=1
  fi
done < <(find bootcamp -path "*/2-practicas/*" -mindepth 3 -maxdepth 3 -type d -iname "lab-*")

echo "== 2. Enlaces relativos en markdown =="
# No parsea markdown de verdad: quita los bloques ``` y busca "](...)".
while IFS= read -r f; do
  content=$(awk '/^```/{c=!c; next} !c' "$f")
  while IFS= read -r link; do
    [ -z "$link" ] && continue
    clean="${link%%#*}"
    [ -z "$clean" ] && continue
    case "$clean" in http*|\<http*|ws*|mailto:*|\#*|/*) continue ;; esac
    dir=$(dirname "$f")
    resolved=$(realpath -m "$dir/$clean")
    if [ ! -e "$resolved" ]; then
      echo "ENLACE ROTO: $f -> $link"
      fail=1
    fi
  done < <(printf '%s\n' "$content" | grep -oE '\]\([^)]+\)' | sed -E 's/^\]\(//;s/\)$//')
# .claude/ y .github/ contienen plantillas con rutas de ejemplo que no resuelven
# por diseno; PLANTILLA-SEMANA.md tambien.
# guia-desarrollo-contenidos.md muestra rutas de ejemplo de una semana tipo.
done < <(find . -iname "*.md" -not -path "./.git/*" -not -path "*/node_modules/*" \
           -not -path "*/.venv/*" -not -path "*/target/*" \
           -not -path "./.claude/*" -not -path "./.github/*" \
           -not -name "PLANTILLA-SEMANA.md" -not -name "guia-desarrollo-contenidos.md")

echo "== 3. Navegacion en README de cada semana publicada =="
while IFS= read -r rm; do
  esta_publicada "$rm" || continue
  if ! grep -q "Navegación" "$rm"; then
    echo "SIN NAVEGACION: $rm"
    fail=1
  fi
done < <(find bootcamp -mindepth 2 -maxdepth 2 -iname "README.md")
# El resto de documentos de la semana (teoría, labs, proyecto, rúbrica,
# recursos, glosario) llevan al pie la tabla anterior/siguiente que escribe
# scripts/generar-navegacion.sh; los README de starter/ y solucion/ no.
while IFS= read -r doc; do
  esta_publicada "$doc" || continue
  if ! grep -q '^<!-- nav -->$' "$doc"; then
    echo "SIN TABLA ANTERIOR/SIGUIENTE (scripts/generar-navegacion.sh NN): $doc"
    fail=1
  fi
done < <(find bootcamp -mindepth 3 -name "*.md" -not -path "*/starter/*" -not -path "*/solution/*" -not -path "*/0-assets/*" -not -path "*/node_modules/*")

echo "== 4. Diagramas SVG en 0-assets/ =="
while IFS= read -r d; do
  echo "DIAGRAMA EN MARKDOWN (debe ser .svg, ver CLAUDE.md): $d"
  fail=1
done < <(find bootcamp -path "*/0-assets/*" -name "*.md" 2>/dev/null)
while IFS= read -r svg; do
  if ! grep -rqF "$(basename "$svg")" --include="*.md" bootcamp README.md README_EN.md; then
    echo "SVG HUERFANO (no enlazado desde ningun .md): $svg"
    fail=1
  fi
done < <(find bootcamp assets -iname "*.svg" 2>/dev/null)

echo "== 5. checks.json valido =="
if command -v jq >/dev/null 2>&1; then
  while IFS= read -r cj; do
    if ! jq -e . "$cj" > /dev/null 2>&1; then
      echo "JSON INVALIDO: $cj"
      fail=1
    fi
  done < <(find bootcamp -name "checks.json")
else
  echo "AVISO: jq no esta instalado, no se validan los checks.json"
fi

echo "== 6. Cabecera de los scripts bash =="
while IFS= read -r sh; do
  if [ "$(head -1 "$sh")" != "#!/usr/bin/env bash" ]; then
    echo "SHEBANG INCORRECTO (debe ser '#!/usr/bin/env bash'): $sh"
    fail=1
  fi
  if ! grep -q 'set -euo pipefail' "$sh"; then
    echo "SIN 'set -euo pipefail': $sh"
    fail=1
  fi
  if [ ! -x "$sh" ]; then
    echo "SIN BIT DE EJECUCION (chmod +x): $sh"
    fail=1
  fi
done < <(find scripts -name "*.sh" 2>/dev/null)

echo "== 7. Reglas de estilo (CLAUDE.md) =="
# Qué: patrones prohibidos por las reglas del curso. Para qué: que una
# regresión no llegue a main. Fuera de bloques de código no hay excepción.
reglas=(
  '\bpip3? install\b|uso de pip (usa uv)'
  '\b(npm|npx|yarn)\b|uso de npm (usa pnpm)'
  '\b(mysql|mariadb)\b|uso de MySQL (usa PostgreSQL)'
  '\b(tenés|podés|querés|sabés|hacé|usá|ejecutá|probá|mirá|fijate|vos|sos|creá|abrí|escribí|revisá|verificá|instalá|copiá|agregá|elegí|guardá|configurá)\b|voseo (usa tuteo)'
)
for r in "${reglas[@]}"; do
  patron=${r%%|*}; msg=${r##*|}
  while IFS= read -r hit; do
    echo "REGLA: $msg: $hit"; fail=1
  done < <(grep -rniP "$patron" --include="*.md" --include="*.yaml" --include="*.yml" --include="*.sh" \
             --exclude-dir=.git --exclude-dir=.claude --exclude-dir=node_modules --exclude-dir=.venv --exclude-dir=target --exclude=verificar-enlaces.sh \
             --exclude=CLAUDE.md --exclude=AUDIT.md . 2>/dev/null \
             | grep -viE '❌|nunca|never|no usar|do not use|no uses|not use' \
             | grep -vE 'pnpm|\buv\b|PostgreSQL')
  # Una línea que nombra la herramienta correcta junto a la prohibida es la
  # propia regla o su penalización en la rúbrica, no un uso.
done
while IFS= read -r svg; do
  echo "REGLA: SVG con degradado (prohibido): $svg"; fail=1
done < <(grep -rliE "Gradient" --include="*.svg" bootcamp assets 2>/dev/null)
while IFS= read -r svg; do
  echo "REGLA: SVG con texto sin fuente sans-serif: $svg"; fail=1
done < <(grep -rlE "<text" --include="*.svg" bootcamp assets 2>/dev/null | xargs -r grep -LE "sans-serif|Inter|Roboto|system-ui")

echo "== 8. Scripts bash de los starter/ parsean =="
while IFS= read -r f; do
  esta_publicada "$f" || continue
  if ! out=$(bash -n "$f" 2>&1); then
    echo "SCRIPT NO PARSEA: $f"; printf '  %s\n' "$(head -1 <<<"$out")"; fail=1
  fi
done < <(find bootcamp -path "*/starter/*" -type f -name "*.sh" 2>/dev/null)

if [ "$fail" -eq 0 ]; then
  echo "OK: sin problemas detectados."
fi
exit "$fail"
