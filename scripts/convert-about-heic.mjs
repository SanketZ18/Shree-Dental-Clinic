import fs from 'node:fs/promises'
import path from 'node:path'
import convert from 'heic-convert'
const sourceDir = path.resolve('images/About')
const targetDir = path.resolve('public/images/About')
await fs.mkdir(targetDir, { recursive: true })
for (const file of (await fs.readdir(sourceDir)).filter(file => file.toLowerCase().endsWith('.heic'))) {
  const output = await convert({ buffer: await fs.readFile(path.join(sourceDir, file)), format: 'JPEG', quality: 0.9 })
  await fs.writeFile(path.join(targetDir, `${path.parse(file).name}.jpg`), output)
  console.log(`Converted ${file}`)
}
