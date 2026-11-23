/**
 * Servidor de archivos del proyecto. No hace falta editarlo.
 *
 * Qué: sirve index.html, styles.css y los módulos de src/ por HTTP.
 * Para qué: el navegador no carga módulos ES (<script type="module">) desde un archivo
 *   abierto con doble clic (file://); necesita una dirección http://.
 * Impacto: no hace falta instalar nada; solo Node.
 *
 * Arranca con:  node server.js             → http://localhost:3000
 * Otro puerto:  PORT=4000 node server.js
 */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname } from 'node:path';

const TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
};

export const startServer = async ({ port = 0 } = {}) => {
  const server = createServer(async (req, res) => {
    const { pathname } = new URL(req.url, 'http://localhost');
    const file = pathname === '/' ? '/index.html' : decodeURIComponent(pathname);
    try {
      if (file.includes('..') || !TYPES[extname(file)]) throw new Error('No encontrado');
      const content = await readFile(new URL(`.${file}`, import.meta.url));
      res.writeHead(200, { 'Content-Type': `${TYPES[extname(file)]}; charset=utf-8` }).end(content);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('No encontrado');
    }
  });
  await new Promise((resolve) => server.listen(port, resolve));
  return {
    url: `http://localhost:${server.address().port}`,
    close: () => new Promise((resolve) => {
      server.close(resolve);
      server.closeAllConnections();
    }),
  };
};

// Solo arranca en el puerto 3000 cuando se ejecuta con `node server.js`, no al importarlo.
if (import.meta.main) {
  const { url } = await startServer({ port: Number(process.env.PORT ?? 3000) });
  console.log(`🚀 Página en ${url} (Ctrl+C para pararlo)`);
}
