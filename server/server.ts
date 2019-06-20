import config from './config/config.json'
import App from './App'

/**
 * Run the server!
 */
App.listen(config.serverPort, (err: any, address: any) => {
    if (err) {
        App.log.error(err)
        process.exit(1)
    }
    App.log.info(`server listening on ${address}`)
})