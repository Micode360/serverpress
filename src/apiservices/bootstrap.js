const path = require('path')
const tsConfigPaths = require('tsconfig-paths')

const tsConfig = require('./tsconfig.json')

const baseUrl = path.join(__dirname, 'build') 

tsConfigPaths.register({
  baseUrl, // We're setting the base url
  paths: tsConfig.compilerOptions.paths 
})
