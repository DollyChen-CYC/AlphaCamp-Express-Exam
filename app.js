// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs ({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// listen routes
app.listen(port, () => {
  console.log(`Express app is running on the http://localhost:${port}`)
})