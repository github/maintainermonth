import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const ACADEMIA_DIRECTORY = path.join(process.cwd(), 'content', 'academia')

const normalizeMaintainerProfiles = (maintainerProfiles = []) => {
  if (Array.isArray(maintainerProfiles)) {
    return maintainerProfiles.reduce(
      (profiles, entry) => ({ ...profiles, ...entry }),
      {},
    )
  }

  if (maintainerProfiles && typeof maintainerProfiles === 'object') {
    return maintainerProfiles
  }

  return {}
}

const parsePost = ({ slug, data, content }) => ({
  slug,
  name: data.name || '',
  institution: data.institution || '',
  department: data.department || '',
  projectName: data.projectName || '',
  projectRepo: data.projectRepo || '',
  projectWebsite: data.projectWebsite || '',
  maintainerProfiles: normalizeMaintainerProfiles(data.maintainerProfiles),
  badges: Array.isArray(data.badges) ? data.badges : [],
  description: data.description || '',
  content,
})

export const getAcademiaPosts = () => {
  if (!fs.existsSync(ACADEMIA_DIRECTORY)) {
    return []
  }

  return fs
    .readdirSync(ACADEMIA_DIRECTORY)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace('.md', '')
      const markdown = fs.readFileSync(
        path.join(ACADEMIA_DIRECTORY, fileName),
        'utf-8',
      )
      const { data, content } = matter(markdown)

      return parsePost({ slug, data, content })
    })
    .sort((postA, postB) => postA.projectName.localeCompare(postB.projectName))
}

export const getAcademiaPostBySlug = (slug) => {
  const filePath = path.join(ACADEMIA_DIRECTORY, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const markdown = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(markdown)
  const post = parsePost({ slug, data, content })

  return {
    ...post,
    htmlContent: marked(post.content),
  }
}
