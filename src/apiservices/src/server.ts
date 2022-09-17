import express from 'express'
import cors from 'cors'
const app = express()
import dotenv from 'dotenv'


dotenv.config()

app.use(express.json())

app.use(cors())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 3000


/*Using routes*/

//Connect your routes here

app.listen(port, () => {
  console.log(`Api services is running on port ${port}`)
})
