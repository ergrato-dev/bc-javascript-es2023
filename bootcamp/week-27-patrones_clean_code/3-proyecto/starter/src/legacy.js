// report: el informe del catálogo, versión de 2019. Funciona y nadie se atreve a tocarlo.
// NO LO CAMBIES: es la referencia de tests/characterization.test.js.
// Tu versión limpia va en src/logic.js.
//
// d: las fichas · t: un tipo, o nada para todos · s: 'name', 'rating' o 'visitors'
// desc: true para el orden inverso · min: valoración mínima · cb: recibe el resumen
export function report(d, t, s, desc, min, cb) {
  var ok = [];
  var bad = [];
  for (var i = 0; i < d.length; i++) {
    var x = d[i];
    var e = [];
    if (typeof x.name != 'string' || x.name.trim() == '') e.push('falta el nombre');
    if (typeof x.type != 'string' || x.type.trim() == '') e.push('falta el tipo');
    if (typeof x.rating != 'number' || x.rating != x.rating || x.rating < 0 || x.rating > 5) e.push('la valoración debe estar entre 0 y 5');
    if (typeof x.visitors != 'number' || x.visitors % 1 != 0 || x.visitors < 0) e.push('los visitantes deben ser un entero de 0 o más');
    if (e.length > 0) {
      bad.push((x.id == undefined ? '?' : x.id) + ': ' + e.join(', '));
    } else {
      if (t && x.type != t) continue;
      if (min != undefined && x.rating < min) continue;
      ok.push(x);
    }
  }
  if (s == 'name') ok.sort(function (a, b) { return a.name.localeCompare(b.name, 'es'); });
  else if (s == 'rating') ok.sort(function (a, b) { return a.rating - b.rating || a.name.localeCompare(b.name, 'es'); });
  else if (s == 'visitors') ok.sort(function (a, b) { return a.visitors - b.visitors || a.name.localeCompare(b.name, 'es'); });
  if (desc) ok.reverse();
  var sum = 0, vis = 0, c = {};
  for (var j = 0; j < ok.length; j++) {
    sum += ok[j].rating;
    vis += ok[j].visitors;
    c[ok[j].type] = (c[ok[j].type] || 0) + 1;
  }
  var top = '—', n = 0;
  for (var k in c) {
    if (c[k] > n || (c[k] == n && k < top)) { top = k; n = c[k]; }
  }
  var avg = ok.length ? Math.round(sum / ok.length * 10) / 10 : 0;
  var out = [];
  out.push('Informe: ' + ok.length + ' de ' + d.length + ' fichas');
  if (ok.length == 0) out.push('Sin fichas que mostrar.');
  for (var m = 0; m < ok.length; m++) {
    out.push((m + 1) + '. ' + ok[m].name + ' (' + ok[m].type + ') · ★ ' + ok[m].rating.toFixed(1) + ' · ' + ok[m].visitors.toLocaleString('es-ES') + ' visitantes');
  }
  out.push('Media: ' + avg.toFixed(1) + ' · Visitantes: ' + vis.toLocaleString('es-ES') + ' · Tipo más frecuente: ' + top);
  if (bad.length > 0) {
    out.push('Fichas con errores (' + bad.length + '):');
    for (var q = 0; q < bad.length; q++) out.push('- ' + bad[q]);
  }
  if (typeof cb == 'function') cb({ count: ok.length, averageRating: avg, totalVisitors: vis, topType: top });
  return out.join('\n');
}
