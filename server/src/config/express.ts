import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from '../api/routes/v1/'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use('/v1', routes)

export default app
