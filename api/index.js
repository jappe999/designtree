import express from 'express'
import bodyParser from 'body-parser'
import tree from './routes/tree'

// Create express instance
const app = express()

app.use(bodyParser())

// Import API Routes
app.use(tree)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}