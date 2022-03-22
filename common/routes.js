const makePath = (path, { parent = HOME } = {}) => ({
  path,
  parent,
  linkTo: (params) => ({
    pathname: path,
    query: params,
  }),
})

export const HOME = makePath('/', {
  parent: null,
})

export const SCHEDULE = makePath('/schedule')

export const EVENT = makePath(`${SCHEDULE.path}/[slug]`, {
  parent: SCHEDULE,
})

export const LIBRARY = makePath('/library')
