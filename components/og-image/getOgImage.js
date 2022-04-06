const { createHash } = require('crypto')

var Jimp = require('jimp')

async function getOgImage({ title, user, type }) {
  if (process.env.NODE_ENV === 'development') {
    return 'og image will be generated in production'
  }

  const hash = createHash('md5').update(title).digest('hex')

  Jimp.read(`public/images/og/templates/${type}.png`, (err, image) => {
    if (err) throw err

    Promise.all([
      Jimp.loadFont('public/fonts/inter/inter.fnt'),
      Jimp.loadFont('public/fonts/jetbrains/jetbrains.fnt'),
    ])
      .then(([inter, jetbrains]) => {
        image
          .print(inter, 132, 212, user, 972)
          .print(jetbrains, 132, 280, title, 972)
          .write(`public/images/og/event-${hash}.png`)
      })
      .catch((err) => {
        console.log('Error loading fonts', err)
      })
  })

  return `https://maintainermonth.github.com/images/og/event-${hash}.png`
}

export default getOgImage
