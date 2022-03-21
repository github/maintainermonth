/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // TODO: temporary. Update when transferring the repository to the github environment.
  basePath:
    process.env.NODE_ENV === 'development' ? undefined : '/tmp-maintainermonth',
}

module.exports = nextConfig
