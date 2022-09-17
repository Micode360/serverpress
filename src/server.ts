import express from 'express'
import cors from 'cors'
const app = express()
import mainBase from './config/base'
import routesApi from './api/routes'
import dotenv from 'dotenv'

mainBase()
dotenv.config()

app.use(express.json())

app.use(cors())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/views'))
app.set('view engine', 'pug')

/*Using routes*/
app.use('/transporter', routesApi)

app.get('/', (req: any, res: any) => {
  res.render(__dirname + `/views/index`)
})

app.listen(port, () => {
  console.log(`app is running on port ${port}`)
})
