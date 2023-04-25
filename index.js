//  Avancera - 1) En första webbtjänst utan Express OBS! Smidigaste sättet att skapa en package.json-fil, är npm init i terminalen
// OK
// const http = require('http')
// const app = http.createServer((request, response)=>{
//     response.write('Hejsan svejsan')
//     response.end()
// })
// app.listen({port: 3000}, ()=>{
//     console.log('Redo på http://localhost:3000/')
// })

// Avancera - 2) Portar, adresser och statuskoder, utan Express - OK
// const http = require('http')
// const app = http.createServer((request, response)=>{
//     if(request.url === '/'){
//         response.write('Hejsan svejsan.')
//     }
//     else if(request.url === '/foo'){
//         response.write('bar')
//     }
//     else if(request.url === '/baz'){
//         response.write('qux')
//     } else {
//         response.statusCode = 404
//     }
//     response.end()
// })
// app.listen({port: 8080}, ()=>{
//     console.log('Redo på http://localhost:8080/')
// })

// Avancera - 3) Metoder utan Express - OK
// const http = require('http')
// let count = 0
// const app = http.createServer((request, response)=>{
//     if(request.url === '/'){
//         response.write('Hejsan svejsan.')
//     }
//     else if(request.url === '/count' && request.method === 'GET'){
//         response.write(`${count}`)
//     }
//     else if(request.url === '/increment'&& request.method === 'POST'){
//         count++
//         response.write(`${count}`)
//     }
//     else if(request.url === '/foo'){
//         response.write('bar')
//     }
//     else if(request.url === '/baz'){
//         response.write('qux')
//     } else {
//         response.statusCode = 404
//     }
//     response.end()
// })
// app.listen({port: 8080}, ()=>{
//     console.log('Redo på http://localhost:8080/')
// })

// Avancera - 4) En adressparameter utan Express - OK
// const http = require('http')
// let count = 0
// const app = http.createServer((request, response) => {
//     if (request.url === '/') {
//         response.write('Hejsan svejsan.')
//     } else if (request.url === '/count') {
//         if (request.method === 'GET') {
//             response.write(`${count}`)
//         } else {
//             response.statusCode = 405
//         }
//     } else if (request.url === '/increment') {
//         if (request.method === 'POST') {
//             count++
//             response.write(`${count}`)
//         } else {
//             response.statusCode = 405
//         }
//     } else if (request.url.startsWith('/add/') && request.method === 'POST') {
//         const number = parseInt(request.url.split('/')[2])
//         count += number
//         response.write(`${count}`)
//     } else if (request.url === '/foo') {
//         response.write('bar')
//     } else if (request.url === '/baz') {
//         response.write('qux')
//     } else {
//         response.statusCode = 404
//     }
//     response.end()
// })
// app.listen({ port: 8080 }, () => {
//     console.log('Redo på http://localhost:8080/')
// })

// Avancera - 5) Redirect utan Express (VG))  - Här använder vi en Found Redirect som flyttat den efterfrågade resursern till en annan adress
// inte OK
// const http = require('http')

// let count = 0

// const originalReq = (req, resp) => {
//   if (req.url === '/') {
//     resp.write('Hejsan svejsan.')
//   } else if (req.url === '/count') {
//     if (req.method === 'GET') {
//       resp.write(`${count}`)
//     } else {
//       resp.statusCode = 405
//     }
//   } else if (req.url === '/increment') {
//     if (req.method === 'POST') {
//       count++
//       resp.write(`${count}`)
//     } else {
//       resp.statusCode = 405
//     }
//   } else if (req.url.startsWith('/add/') && req.method === 'POST') {
//     const num = parseInt(req.url.split('/')[2])
//     count += num
//     resp.write(`${count}`)
//   } else if (req.url === '/foo') {
//     resp.write('bar')
//   } else if (req.url === '/baz') {
//     resp.write('qux')
//   } else {
//     resp.statusCode = 404
//   }

//   resp.end()
// }

// const relocateReq = (req, resp) => {
//   resp.writeHead({ Location: 'http://localhost:3000/' })
//   resp.end()
// }

// app.listen({ port: 3000 }, () => {
//   console.log('Redo på http://localhost:3000/')
// })

// const redirect = http.createServer((req, resp) => {
//     relocateReq(req, resp)
// })

// redirect.listen({ port: 8080 }, () => {
//   console.log('Redo på http://localhost:8080/')
// })

// Avancera - 1) En första webbtjänst med Express)
// OK

// const express = require('express')
// const app = express()
// app.get('/', (request, response) => {
//     response.send('Hejsan svejsan')
// }).listen(3000, ()=>{
//     console.log('3000 är igång')
// })

// Avancera - 2) Portar, adresser, statuskoder och metoder, med Express)
// OK

// const express = require('express')
// let count = 0
// const app = express()
// app.get('/', (request, response) => {
//     response.send('Hejsan svejsan')
// })
// app.get('/foo', (request, response) => {
//     response.send('bar')
// })
// app.get('/baz', (request, response) => {
//     response.send('qux')
// })
// app.get('/count', (request, response) => {
//     response.status(200).send(`${count}`)
// })
// app.post('/increment', (request, response) => {
//     count++
//     response.status(200).send()
// })

// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 3) Strängar i en JSON-array)
// OK

// const express = require('express')
// const app = express()

// const arrayOfUserAgents = []

// app.get('/', (request, response)=>{
//    const userAgent =  request.headers['user-agent']
//    arrayOfUserAgents.push(userAgent)
//     response.send(`${userAgent}`)
// })
// app.get('/log', (request, response)=>{
//     response.json(arrayOfUserAgents)
// })
// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 4) JSON-objekt i en JSON-array)
// OK

// const express = require('express')
// const app = express()

// let arrayOfUserAgents = []

// app.get('/', (request, response)=>{
//     const time = new Date()
//     const date = time.toISOString()
//    const userAgent =  request.headers['user-agent']
//    arrayOfUserAgents.push({userAgent, time : date})
//     response.send(`${userAgent}`)
// })
// app.get('/log', (request, response)=>{
//     response.json(arrayOfUserAgents)
// })

// app.delete('/log', (request, response)=>{
//     arrayOfUserAgents = []
//     response.send('Empty')
// })
// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 5) VG Accept)
// INTE OK ___ PROGRESS <-----

// const express = require('express')
// const app = express()

// let arrayOfUserAgents = []

// app.get('/', (request, response)=>{
//     const time = new Date()
//     const date = time.toISOString()
//    const userAgent =  request.headers['user-agent']
//    const accept = request.headers['accept']
//    if(accept === '*/*'){
//     console.log("Accept "+ accept)
//    }
//    if(accept === 'application/json')
//    arrayOfUserAgents.push({userAgent, time : date})
//     response.send(`${userAgent}`)
// })
// app.get('/log', (request, response)=>{
//     response.json(arrayOfUserAgents)
// })

// app.delete('/log', (request, response)=>{
//     arrayOfUserAgents = []
//     response.send('Empty')
// })
// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// const express = require('express');
// const app = express();

// const userAgents = [];

// app.get('/', (req, res) => {
//   const userAgent = req.get('User-Agent');
//   const date = new Date();
//   const isoDate = date.toISOString();
//   const userAgentObj = { userAgent, time: isoDate };
//   userAgents.push(userAgentObj);
//   res.send('User-Agent and time saved to array!');
// });

// app.get('/log', (req, res) => {
//   res.json(userAgents);
// });

// app.delete('/log', (req, res) => {
//   userAgents.length = 0;
//   res.send('Array cleared');
// });

// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });

// Avancera - 1) En adressparameter - OK

// const express = require('express')
// const app = express()

// let count = 0
// app.get('/count', (req, res)=>{
//     res.send(`${count}`)
// })

// app.post('/add/:number', (req, res)=>{
//     count += parseInt(req.params.number)
//     res.status(200).send()

// })

// .listen(8080, ()=>{
//     console.log('8080 is on')
// })

// Avancera - 2) Två adressparametrar - OK

// const express = require('express')
// const app = express()

// app.get('/add/:x/:y', (req, res)=>{
//     let x = parseInt(req.params.x)
//     let y = parseInt(req.params.y)
//     let sum = (x+y)
//     res.send(`${sum}`)
// })

// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 3) Query-parametrar - OK
// const express = require('express')
// const app = express()

// app.get('/add/', (req, res)=>{
//     if(parseInt(req.query.x) >= 0  && parseInt(req.query.y) >= 0){
//         let x = parseInt(req.query.x)
//         let y = parseInt(req.query.y)
//         let sum = (x+y)
//         res.send(`${sum}`)
//     } else{
//         console.log('Funkar')
//         res.status(400)
//         res.send()
//     }
// })

// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 4) En upprepad query-parametrar - OK

// const express = require('express')
// const app = express()

// app.get('/add/', (req, res)=>{
//     if(parseInt(req.query.x) >= 0){
//         let x = []
//         x = req.query.x
//         let sum = 0
//         for(let i = 0; i< x.length; i++){
//             sum += parseInt(x[i])
//         }
//         res.send(`${sum}`)
//     }
//     else{
//         res.status(400)
//         res.send()
//     }
// })

// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 5) VG API-nyckel - OK
// const express = require('express')
// const app = express()

// app.use((req, res, next)=>{
//     if("2a160d03-d430-4ce4-a79c-2cb14f626ee4" !== req.query.api-key){
//         res.status(401).send()
//     }
//     next()
// })

// app.get('/add/', (req, res)=>{
//     if(parseInt(req.query.x) >= 0){
//         let x = []
//         x = req.query.x
//         let sum = 0
//         for(let i = 0; i< x.length; i++){
//             sum += parseInt(x[i])
//         }
//         res.send(`${sum}`)
//     }
//     else{
//         res.status(400)
//         res.send()
//     }
// })

// .listen(8080, ()=>{
//     console.log('8080 är igång')
// })

// Avancera - 1) Inloggning via JSON - OK
// const express = require('express')
// const app = express()

// app.use(express.json())

// app.post('/login', (request, response) => {
//     const email = request.body.email
//     const password = request.body.password
//     if (email === 'alice@example.com' && password === 'secret') {
//         response.status(200).send('OK')
//     } else if (
//         (!email && !password) ||
//         (!email && password === 'secret') ||
//         (email === 'alice@example.com' && !password)
//     ) {
//         response.status(400).send('BAD REQUEST')
//     } else {
//         response.status(401).send('UNAUTHORIZED')
//     }
// })
// .listen(8080, () => {
//     console.log('8080 is on')
// })

// Avancera - 2) Skapa ett konto via JSON -  INTE OK
// const express = require('express')
// const app = express()
// app.use(express.json())
// let arrayOfUsers = [
//     {
//         email: 'alice@example.com',
//         password: 'secret'
//     }
// ]

// app.post('/create-account', (request, response) => {
//     let email = request.body.email
//     let password = request.body.password
//     const login = arrayOfUsers.find((user) => user.email === email)
//     if (login && login.email === email && login.password === password) {
//         response.status(409).send('CONFLICT BABY')
//     } else if (!email && !password) {
//         response.status(400).send('BAD REQUEST')
//     } else if (!email) {
//         response.status(400).send('BAD REQUEST')
//     } else if (!password) {
//         response.status(400).send('BAD REQUEST')
//     } else {
//         const account = { email, password }
//         arrayOfUsers.push(account)
//         response.status(201).send('CREATED')
//     }
// })

// app.post('/login', (request, response) => {
//     const email = request.body.email
//     const password = request.body.password
//     if (email && password) {
//         const login = arrayOfUsers.find((user) => user.email === email)
//         if (login && email === login.email && password === login.password) {
//             response.status(200).send('OK')
//         } else {
//             response.status(401).send('UNAUTHORIZED')
//         }
//     } else {
//         response.status(400).send('BAD REQUEST')
//     }
// }).listen(8080, () => {
//     console.log('8080 is on')
// })

// Avancera - 2) Skapa ett konto via JSON -  OK

// const express = require('express')
// const app = express()

// app.use(express.json())

// const accounts = []

// app.post('/create-account', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password

//   if (!email || !password) {
//     res.status(400).send('BAD REQUEST')
//   } else if (accounts.find(account => account.email === email)) {
//     res.status(409).send('CONFLICT BABY')
//   } else {
//     accounts.push({ email, password })
//     res.status(201).send('CREATED')
//   }
// })

// app.post('/login', (req, res) => {
//   const email = req.body.email
//   const password = req.body.password
//   const account = accounts.find(account => account.email === email)

//   if (!email || !password) {
//     res.status(400).send('BAD REQUEST')
//   } else if (account && account.password === password) {
//     res.status(200).send('OK')
//   } else {
//     res.status(401).send('UNAUTHORIZED')
//   }
// })

// app.listen(8080, () => {
//   console.log('8080')
// })

// Avancera - 3) Skapa flera konton via JSON - INTE OK
// const express = require('express')
// const app = express()

// app.use(express.json())
// let arrayOfUsers = [
//     {
//         email: 'alice@example.com',
//         password: 'secret'
//     }
// ]

// // Tydligen är det en konflikt i denna som gör att man inte kan ladda in fler samtidigt :(
// app.post('/create-accounts', (request, response) => {
//     const newAccounts = []
//     const badUsers = []
//     let pass = true
//     let isThere = false
//     if (Object.keys(request.body).length === 0 ) {
//         pass = false
//     }

//     if(request.body.email || request.password){
//         response.status(400).send('BAD REQUEST')
//         return
//     }
//     request.body.forEach((account) => {
//         if (!account.email || !account.password) {
//             badUsers.push(account)
//         } else {
//             for (let i = 0; i < arrayOfUsers.length; i++) {
//                 if (account.email === arrayOfUsers[i].email) {
//                     isThere = true
//                     return
//                 }
//             }
//             newAccounts.push(account)
//         }
//     })
//     if (badUsers.length > 0 || !pass) {
//         response.status(400).send('BAD REQUEST')
//         return
//     }
//     if (isThere) {
//         response.status(409).send('CONFLICT BABY')
//         return
//     }
//     if (newAccounts) {
//         newAccounts.forEach((newUser) => {
//             arrayOfUsers.push(newUser)
//         })
//         response.status(201).send('OK')
//         return
//     }
// })

// app.get('/create-accounts', (req, res) => {
//     res.json(arrayOfUsers)
// })

// app.post('/create-account', (request, response) => {
//     let email = request.body.email
//     let password = request.body.password
//     const login = arrayOfUsers.find((user) => user.email === email)
//     if (login && login.email === email && login.password === password) {
//         response.status(409).send('CONFLICT BABY')
//     } else if (!email && !password) {
//         response.status(400).send('BAD REQUEST')
//     } else if (!email) {
//         response.status(400).send('BAD REQUEST')
//     } else if (!password) {
//         response.status(400).send('BAD REQUEST')
//     } else {
//         const account = { email, password }
//         arrayOfUsers.push(account)
//         response.status(201).send('CREATED')
//     }
// })

// Måste lägga till så att fler konton kan logga in samtidigt, i en array
// app.post('/login', (request, response) => {
//     let arrayOfLogins = []
//     let email =''
//     let password=''

// if(Object.keys(request.body).length > 2){ // test
//     request.body.forEach(newLogin=>{
//         arrayOfLogins.push({
//             email: newLogin.email,
//             password : newLogin.password
//         })
//     })
// } else{
//     email = request.body.email
//     password = request.body.password
// }

// email = request.body.email
// password = request.body.password
// if (email && password) {
//     const login = arrayOfUsers.find((user) => user.email === email)
//     if (login && email === login.email && password === login.password) {
//         response.status(200).send('OK')
//     } else {
//         response.status(401).send('UNAUTHORIZED')
//     }
// } else {
//     response.status(400).send('BAD REQUEST')
// }

// if(arrayOfLogins){ // test
//     arrayOfLogins.forEach(login =>{
//         if (login.email && login.password) {
//             const newLogin = arrayOfUsers.find((user) => user.email === email)
//             if (newLogin && login.email === newLogin.email && login.password === newLogin.password) {
//                 response.status(200).send('OK')
//             } else {
//                 response.status(401).send('UNAUTHORIZED')
//             }
//         } else {
//             response.status(400).send('BAD REQUEST')
//         }
//     })
// }

// else{ //test
//     if (email && password) {
//         const login = arrayOfUsers.find((user) => user.email === email)
//         if (login && email === login.email && password === login.password) {
//             response.status(200).send('OK')
//         } else {
//             response.status(401).send('UNAUTHORIZED')
//         }
//     } else {
//         response.status(400).send('BAD REQUEST')
//     }
// }
// })

// app.listen(8080, () => {
//     console.log('8080 is on')
// })

// MIN EGNA CITIESTJÄNST
// 1 - EJ GODKÄND
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', async (req, res)=>{
    let jsonData = []
    const data = await fetch('http://avancera.app/cities/')
jsonData = await data.json()
    res.status(200)
    request.send(jsonData)
}).listen(8080,()=>{console.log('8080')})

// 2
// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get('/:id', async (req, res) => {
//     console.log(req.params.id)
//     const data = await fetch(`http://avancera.app/cities/${req.params.id}`)
//     try {
//         if (!data || data === null || data === '') {
//             res.status(404).send('Not Found')
//         } else {
//             const jsonData = await data.json()
//             res.json(jsonData)
//         }
//     } catch {
//         res.status(404).send('Not Found')
//     }
// })

// app.get('/', async (req, res) => {
//     const data = await fetch('http://avancera.app/cities')
//     const jsonData = await data.json()
//     res.json(jsonData)
// }).listen(8080, () => {
//     console.log('8080')
// })

// __________________________________________________________
// const express = require('express');
// const fetch = require('node-fetch');
// const app = express();

// app.use(express.json());

// app.get('/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const response = await fetch(`http://avancera.app/cities/${id}`);
//     if (response.status === 404) {
//       return res.status(404).json({ message: 'City not found' });
//     }
//     const city = await response.json();
//     res.json(city);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });

// __________________________________________________________
// 3
// const express = require('express')
// const app = express()

// app.use(express.json())

// app.get('/:id', async (req, res) => {
//     console.log(req.params.id)
//     const data = await fetch(`http://avancera.app/cities/${req.params.id}`)
//     try {
//         if (!data || data === null || data === '') {
//             res.status(404).send('Not Found')
//         } else {
//             const jsonData = await data.json()
//             res.send(jsonData)
//         }
//     } catch {
//         res.status(404).send('Not Found')
//     }
// })

// HÄR MÅSTE DU TÄNKA OM!
// app.get('/', async (req, res) => {
//     let data = []
//     if (req.query.name) {
//         try {
//             data = await fetch(
//                 `http://avancera.app/cities/?name=${req.query.name}`
//             )

//         } catch {
//             res.status(404)
//         }
//     } else {
//         data = await fetch('http://avancera.app/cities')
//     }
//     const jsonData = await data.json()
//     res.send(jsonData)
// }).listen(8080, () => {
//     console.log('8080')
// })
