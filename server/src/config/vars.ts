import * as path from 'path'
import dotenv from 'dotenv-safe'

// import .env variables
if (process.env.NODE_ENV === 'development') {
	dotenv.config({
		path: path.join(__dirname, '../../.env'),
		sample: path.join(__dirname, '../../.env.example'),
	})
}

const env = process.env.NODE_ENV
const port = process.env.PORT || 8080

export {
	env, port
}
