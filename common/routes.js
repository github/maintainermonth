const makePath = (path, { parent = HOME } = {}) => ({
  path,
  parent,
  linkTo: (params) => ({
    pathname: path,
    query: params,
  }),
  getPath: (year) => (
    year?"/"+year+path:path
  )
})

export const HOME = makePath('/', {
  parent: null,
})

export const SCHEDULE = makePath('/schedule')

export const EVENT = makePath(`${SCHEDULE.path}/[slug]`, {
  parent: SCHEDULE,
})

export const LIBRARY = makePath('/library')

export const Y2022 = makePath('/2022')

export const Y2023 = makePath('/2023')

export const Y2024 = makePath('/2024')

export const NEWS = makePath("/news")

export const PARTNER_PACK = makePath('/partner-pack')

export const SECURITY_CHALLENGE = makePath('/security-challenge')