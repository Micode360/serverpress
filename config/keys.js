const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    mongoURI: process.env.ATLAS_URI,
    jwtSecret: process.env.JWT_SECRET
}