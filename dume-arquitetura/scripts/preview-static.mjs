import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const port = Number(process.env.PORT || 5173)
const host = process.env.HOST || 'localhost'
const root = resolve(fileURLToPath(new URL('../dist', import.meta.url)))

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || '/', `http://${host}:${port}`)
  const pathname = url.pathname === '/' ? '/index.html' : url.pathname
  const file = resolve(root, `.${decodeURIComponent(pathname)}`)

  if (!file.startsWith(root)) {
    response.writeHead(403)
    response.end('Forbidden')
    return
  }

  try {
    const body = await readFile(file)
    response.writeHead(200, {
      'Content-Type': contentTypes[extname(file)] || 'application/octet-stream',
    })
    response.end(body)
  } catch {
    const fallback = await readFile(resolve(root, 'index.html'))
    response.writeHead(200, { 'Content-Type': contentTypes['.html'] })
    response.end(fallback)
  }
})

server.listen(port, host, () => {
  console.log(`Dume static preview: http://${host}:${port}`)
})
