import app from './config/express'
import {port} from './config/vars'


app.listen(port, () => {
	console.log(`app is running at port: ${port}`)
})

/**
 * Exports express
 * @public
 */
export default app
