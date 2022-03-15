// TODO: provisional
const PRODUCTION_PATH = '/tmp-maintainermonth'

export const getRelativeURL = (url) =>
  process.env.NODE_ENV === 'development' ? url : `${PRODUCTION_PATH}${url}`
