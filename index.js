// EJ INLÄMNAD
// SQLite express 2:an INTE OK - LOGINPROBLEMET
const express = require('express'),
    sqlite = require('sqlite'),
    sqlite3 = require('sqlite3')

const { v4: uuidv4 } = require('uuid')

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

const PORT = 8080

app.post('/login', async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const token = uuidv4()

    if (email && password) {
        const account = await database.all(
            `SELECT * FROM accounts WHERE email=?`,
            [email]
        )
        if (account.length !== 1 || account[0].password !== password) {
            response.status(401).send('UNAUTHORIZED')
        } else {
            await database.run(
                `INSERT INTO tokens (token, account_id) VALUES (?, ?)`,
                [token, account[0].id]
            )
            response.status(201).json({token})
        }
    } else {
        response.status(400).send('BAD REQUEST')
    }
})

app.get('/messages', async (req, res) => {
    res.send(await database.all('SELECT * FROM messages ORDER BY created'))
})

app.get('/', async (req, res) => {
    res.send(await database.all('SELECT * FROM accounts'))
})

app.listen(PORT, () => {
    console.log(`${PORT} is on`)
})
