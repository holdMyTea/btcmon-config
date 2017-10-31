import express from 'express'

import controller from '../controllers/controller.js'

const route = express.Router()

route.get('/sources', controller.getSources)

route.get('/price-scrapper/:index', controller.getPriceScrapper)

export default route
