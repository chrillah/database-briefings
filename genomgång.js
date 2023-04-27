// Ta emot formulärinformation

// const express = require('express')
// const app = express()
// app.use(express.urlencoded({extended : false}))

// app.post('/', (request, response)=>{
//     console.log(request.body)
//     response.send('<p>Formulär mottaget</p>')
// })

// app.listen(3000, ()=>{
//     console.log('Formulär 3000 är igång')
// })

// Ta emot JSON
// const express = require('express')
// const app = express()

// app.use(express.json())

// app.post('/user', (request, response) =>{
//     response.send(request.body.email)
// })

// .listen(3000, ()=>{
//     console.log('JSON-mottagning 3000 är igång')
// })

// SQLite med NODE

// SQLite med Express

const express = require('express'),
    sqlite = require('sqlite'),
    sqlite3 = require('sqlite3')

const PORT = 3000

let database
;(async () => {
    database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'test.sqlite'
    })

    await database.run('PRAGMA foreign_key = ON')

    console.log('DATABAS REDO')
})()

const app = express()

app.use(express.json())

app.get('/', async (request, response) => {
    response.send(await database.all('SELECT * FROM cities'))
})

app.get('/:id', async (request, response) => {
    const cities = await database.all(
        `
    SELECT * FROM cities WHERE id=?`,
        [request.params.id]
    )

    if (cities.length !== 1) {
        response.status(404).send()
        return
    }

    response.send(cities[0])
})

app.put('/:id', async (req, res)=>{
    await database.run(`UPDATE cities SET name=?, population=?
    WHERE id=?` [req.body.name, req.body.population, req.params.id])

    res.send()
})

app.delete('/:id', async (req, res)=>{
    await database.run(`DELETE FROM cities WHERE id=?`,
    [req.params.id])

    res.send()
})

app.post('/', async (request, response) =>{
    await database.run(`
    INSERT INTO cities (name, population) VALUES (? , ? )
    `, [request.body.name, request.body.population])

    response.status(201).send()
})

app.listen(PORT, () => {
    console.log(`${PORT} is on`)
})
