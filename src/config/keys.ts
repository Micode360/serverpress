import dotenv from 'dotenv'
dotenv.config()

const Keys = {
  mongoURI: process.env.ATLAS_URI,
  jwtSecret: process.env.JWT_SECRET,
}

export default Keys
