import express from 'express'
import {APP_PORT} from './config'

const app = express();
console.log(process.env)
 
app.listen(APP_PORT, () => console.log(`app running on port ${APP_PORT}`))