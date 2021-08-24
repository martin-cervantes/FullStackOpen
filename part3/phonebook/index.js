const express = require('express')
const app = express()

const persons = [
    {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
    },
    {
      "id": 2,
      "name": "Ada Lovelace",
      "number": "39-44-5323523"
    },
    {
      "id": 3,
      "name": "Dan Abramov",
      "number": "12-43-234345"
    },
    {
      "id": 4,
      "name": "Mary Poppendieck",
      "number": "39-23-6423122"
    },
    {
      "name": "Martin Cervantes",
      "number": "(656) 123-45-67",
      "id": 5
    }
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/info', (request, response) => {
  const currentdate = new Date();

  const datetime = "Last Sync: " + currentdate.getDate() + "/"+(currentdate.getMonth()+1)
  + "/" + currentdate.getFullYear() + " @ "
  + currentdate.getHours() + ":"
  + currentdate.getMinutes() + ":" + currentdate.getSeconds();

  response.send(`<p>Phonebook has info for ${persons.length} people</p><br>${datetime}`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
