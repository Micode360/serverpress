import mongoose from 'mongoose'
import keys from './keys'

interface mongoOpt {
  useNewUrlParser?: Boolean
  useUnifiedTopology?: Boolean
}

let mongoOpt: Object = <mongoOpt>{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const newbase: string = keys.mongoURI!

const base = async () => {
  try {
    mongoose.connect(newbase, mongoOpt)

    console.log('MongoDB Connection established...')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default base
