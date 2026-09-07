import fs from 'node:fs/promises'
import path from 'node:path'
import convert from 'heic-convert'

const sourceDir = path.resolve('images/MyPictures')
const targetDir = path.resolve('public/images/MyPictures')
const files = (await fs.readdir(sourceDir)).filter(file => file.toLowerCase().endsWith('.heic'))

for (const file of files) {
  const input = await fs.readFile(path.join(sourceDir, file))
  const output = await convert({ buffer: input, format: 'JPEG', quality: 0.9 })
  await fs.writeFile(path.join(targetDir, `${path.parse(file).name}.jpg`), output)
  console.log(`Converted ${file}`)
}
