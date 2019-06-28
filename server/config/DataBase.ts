import mongoose from 'mongoose'
import config from './config.json'

export class DataBase {
    constructor() {
        mongoose.Promise = global.Promise
        mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true }, (err) => {
            if(err) {
                console.log('Database is NOT Connected!')
            } else {
                console.log('Database is Connected!')
            }
        })
    }
}
