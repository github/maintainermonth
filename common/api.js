import fs from 'fs'
import matter from 'gray-matter'

export const getDataFromMD = (path) => {
  const markdown = fs.readFileSync(path, 'utf-8')
  const { data: frontmatter, content } = matter(markdown)

  return { ...frontmatter, content }
}

export const parseGetInvolvedData = (data) => {
  const examples = data.examples.map((example) => {
    const [{ title }, { image }, {imageDescription}] = Object.values(example)[0]
    return { title, image, imageDescription }
  })
  return { ...data, examples }
}
