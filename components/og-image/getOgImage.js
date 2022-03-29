const { createHash } = require('crypto')

var Jimp = require('jimp')

async function getOgImage(title) {
  if (process.env.NODE_ENV === 'development') {
    return 'og image will be generated in production'
  }

  const hash = createHash('md5').update(title).digest('hex')

  Jimp.read('public/images/og/templates/event.png', (err, image) => {
    if (err) throw err

    Jimp.loadFont('public/fonts/inter/inter.fnt')
      .then((font) => {
        image
          .print(font, 100, 100, title, 900)
          .write(`public/images/og/event-${hash}.png`)
      })
      .catch((err) => {
        console.log('Error loading font', err)
      })
  })

  // TODO: generate absolute url
  return `https://redradix.github.io/tmp-maintainermonth/images/og/event-${hash}.png`
}

export default getOgImage
