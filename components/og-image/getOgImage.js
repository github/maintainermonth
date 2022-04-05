const { createHash } = require('crypto')

var Jimp = require('jimp')

async function getOgImage({ title, user, type, date, startTime, endTime }) {
  if (process.env.NODE_ENV === 'development') {
    return 'og image will be generated in production'
  }

  const hash = createHash('md5').update(title).digest('hex')

  Jimp.read(`public/images/og/templates/${type}.png`, (err, image) => {
    if (err) throw err

    Promise.all([
      Jimp.loadFont('public/fonts/inter/inter.fnt'),
      Jimp.loadFont('public/fonts/inter-purple/inter.fnt'),
      Jimp.loadFont('public/fonts/jetbrains/jetbrains.fnt'),
    ])
      .then(([inter, interPurple, jetbrains]) => {
        image
          .print(inter, 80, 160, user, 662)
          .print(jetbrains, 80, 204, title, 662)
          .print(interPurple, 878, 88, date)
          .print(
            inter,
            856,
            152,
            startTime.utc && endTime.utc
              ? `${startTime.utc} - ${endTime.utc} UTC`
              : 'TBD',
            300,
          )
          .print(
            inter,
            856,
            188,
            startTime.pt && endTime.pt
              ? `${startTime.pt} - ${endTime.pt} PT`
              : 'TBD',
            300,
          )
          .write(`public/images/og/event-${hash}.png`)
      })
      .catch((err) => {
        console.log('Error loading fonts', err)
      })
  })

  // TODO: generate absolute url
  return `https://redradix.github.io/tmp-maintainermonth/images/og/event-${hash}.png`
}

export default getOgImage
