import fs from 'fs'
import matter from 'gray-matter'

export const getDataFromMD = (path) => {
  const markdown = fs.readFileSync(path, 'utf-8')
  const { data: frontmatter, content } = matter(markdown)

  return { ...frontmatter, content }
}
