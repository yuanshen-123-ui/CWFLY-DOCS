import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 5174

app.use(express.static(path.join(__dirname, 'docs/.vitepress/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs/.vitepress/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`CWFLY 文档站已启动: http://localhost:${PORT}`)
})
