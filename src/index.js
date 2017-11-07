import express from 'express'
import morgan from 'morgan'

import variables from './variables.js'
import routes from './routes/routes.js'

const app = express()

app.use(morgan('common'))

app.use(routes)

app.get('/', (request, response) => response.send('Config here'))

app.listen(variables.CONFIG_PORT, variables.CONFIG_HOST, () => console.log('Config listening'))

export default app
