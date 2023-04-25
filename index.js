// citiestjänst 3:an
const express = require('express')
const app = express()
app.use(express.json())
const PORT = 8080

const cities = [
    {
        id: '5347da70-fef3-4e8f-ba49-e8010edba878',
        name: 'Stockholm',
        population: 1372565
    },
    {
        id: '4787e794-b3ac-4a63-bba0-03203f78e553',
        name: 'Göteborg',
        population: 549839
    },
    {
        id: '4bc43d96-3e84-4695-b777-365dbed33f89',
        name: 'Malmö',
        population: 280415
    },
    {
        id: 'ec6b9039-9afb-4632-81aa-ff95338a011a',
        name: 'Uppsala',
        population: 140454
    },
    {
        id: '6f9eee1f-b582-4c84-95df-393e443a2cae',
        name: 'Västerås',
        population: 110877
    },
    {
        id: '27acb7a0-2b3d-441f-a556-bec0e430992a',
        name: 'Örebro',
        population: 107038
    },
    {
        id: '6745e3f4-636a-4ab7-8626-2311120c92c9',
        name: 'Linköping',
        population: 104232
    },
    {
        id: 'a8a70019-9382-4215-a5b3-6278eb9232c3',
        name: 'Helsingborg',
        population: 97122
    },
    {
        id: '6fc1a491-3710-42f2-936d-e9bf9be4f915',
        name: 'Jönköping',
        population: 89396
    },
    {
        id: '45428195-ab40-43d2-ad11-a62933f4a3a8',
        name: 'Norrköping',
        population: 87247
    }
]

app.get('/', (request, response) => {
    response.send(
        request.query.name === undefined
        ? cities : cities.filter(city =>city.name.toLowerCase()
        .indexOf(request.query.name.toLowerCase()) !== -1))
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    console.log(id)
    const found = cities.find((city) => city.id === id)
    if (found) {
        res.status(200).send(found)
    } else [res.status(404).send('Not found :( ')]
})

app.get('/', (req, res) => {
    res.status(200)
    res.json(cities)
})

app.listen(PORT, () => {
    console.log(`${PORT} cities 3`)
})
