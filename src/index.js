const express = require('express')
const app = express()

let cities = []

app.use(express.json())

app.get('/city', (request, response) => {
  response.json(cities)
})

app.post('/city', (request, response) => {
    cities.push({id: cities.length + 1, name: request.body.name})
    response.json(cities)
})

app.put('/city/:id', (request, response) => {
    const cityFind = cities.find((c) => String(c.id) === request.params.id)
    cities[cityFind.id - 1] = {id: cityFind.id, name: request.body.name}
    response.json(cities)
})

app.listen(3000)