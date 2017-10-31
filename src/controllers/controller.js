import config from '../config.js'

export default {
  getSources: (request, response) => {
    response.send(Object.keys(config))
  },
  getPriceScrapper: (request, response) => {
    const name = Object.keys(config)[request.params.index]

    if (name === undefined) {
      response.status(400).send('Out of range')
    }

    response.send({
      name: name,
      data: config[name]
    })
  }
}
