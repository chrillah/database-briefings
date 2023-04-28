// citiestjänst 8:an - EJ INLÄMNAD
const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

app.use(express.json())

function limitReqBody(bodyParts) {
    return function (req, res, next) {
        for (let bodyPart in req.body) {
            if (!bodyParts.includes(bodyPart)) {
                pass = false
            }
        }
        next()
    }
}

const PORT = 8080
let cities = [
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

let pass = true

app.get('/', (req, res) => {
    let resultCities = cities
    if (req.query.name) {
        resultCities = resultCities.filter((city) =>
            city.name.toLowerCase().includes(req.query.name.toLowerCase())
        )
    }

    if (req.query.minPopulation) {
        resultCities = resultCities.filter(
            (city) => city.population >= req.query.minPopulation
        )
    }

    if (req.query.maxPopulation) {
        resultCities = resultCities.filter(
            (city) => city.population <= req.query.maxPopulation
        )
    }

    res.json(resultCities)
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    const found = cities.find((city) => city.id === id)
    if (found) {
        res.status(200).send(found)
    } else [res.status(404).send('Not found :( ')]
})

app.delete('/:id', (req, res) => {
    const queryId = req.params.id
    const found = cities.find((city) => city.id === queryId)
    if (found) {
        let newArray = []
        for (let i = 0; i < cities.length; i++) {
            if (found.id !== cities[i].id) {
                newArray.push(cities[i])
            }
        }
        res.status(200).send(found)
        cities = newArray
    } else {
        res.status(404).send('Not found :( ')
    }
})

app.post('/', (req, res) => {
    const name = req.body.name
    const population = req.body.population
    if (
        !name ||
        !population ||
        req.body.id ||
        typeof name !== 'string' ||
        typeof population !== 'number' ||
        population < 0 ||
        !Number.isInteger(population)
    ) {
        res.status(400).send('BAD REQUEST')
    } else {
        const found = cities.find((city) => city.name === name)
        if (found) {
            res.status(409).send('CONFLICT BABY')
        } else {
            const id = uuidv4()
            const newCity = {
                id: id,
                name: name,
                population: population
            }
            cities.push(newCity)
            res.status(201).json(newCity)
        }
    }
})

app.put('/:id', limitReqBody(['id', 'name', 'population']), (req, res) => {
    const paramsId = req.params.id
    const queryId = req.body.id
    const queryName = req.body.name
    const queryPopulation = req.body.population


    if (pass) {
        if (
            !queryName ||
            !paramsId ||
            !queryId ||
            typeof queryName !== 'string' ||
            !queryPopulation ||
            typeof queryPopulation !== 'number' ||
            queryPopulation < 0 ||
            !Number.isInteger(queryPopulation)
        ) {
            res.status(400).send('BAD REQUEST')
        } else {
            const found = cities.find((city) => city.id === paramsId)
            const nameAlreadyInUse = cities.find(
                (city) => city.name.toLowerCase() === queryName.toLowerCase()
            )
            if (!found) {
                res.status(400).send('BAD REQUEST')
            } else if (
                found.name.toLowerCase() === queryName.toLowerCase() ||
                nameAlreadyInUse
            ) {
                res.status(409).send('CONFLICT BABY')
            } else {
                found.name = queryName
                found.population = queryPopulation
                res.status(200).send('OK')
            }
        }
    } else {
        res.status(400).send('BAD REQUEST')
        pass = true
    }
})

app.listen(PORT, () => {
    console.log(`${PORT} cities 4`)
})
