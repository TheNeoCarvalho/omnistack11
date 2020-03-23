const exprees = require('express')

const app = exprees()

app.get('/', (req, res) => {
  res.send('Ominstrack 11')
})

app.listen(3333)