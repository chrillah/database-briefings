

// Avancera - 3)  - INTE OK

// Olika adresser
// const http = require('http')
// const app = http.createServer((request, response)=>{

// if/ switch-sats för att hantera olika adresser
//     if(request.url === '/'){
//         response.write('Hemadress')
//     } else {
//         response.write('Annan adress')
//     }
//     response.end()
// })
// app.listen({port: 3000}, ()=>{
//     console.log('Redo på http://localhost:3000/')
// })

// SKICKA EN METOD
// const http = require('http')
// const app = http.createServer((request, response)=>{

// ta emot en metod
//     response.write(`Du gjorde ett ${request.method} anrop bitch`)
//     response.end()
// })
// app.listen({port: 3000}, ()=>{
//     console.log('Redo på http://localhost:3000/')
// })

// Skicka statuskod
// const http = require('http')
// const app = http.createServer((request, response)=>{

//     response.statusCode = 401
//     response.write('Något är fel, statuskod och grejjer')
//     response.end()
// })
// app.listen({port: 3000}, ()=>{
//     console.log('Redo på http://localhost:3000/')
// })


// Vi ska ge en response i form av statuskoder i headern
// const http = require('http')
// const PORT = process.env.PORT || 5001;
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type":"text/html"});

//     const url = req.url
//     if(url === '/profile'){
//         res.write('<h1>Welcome to my profile page</h1>')
//         res.end()
//     } else if(url === '/shipment'){
//         const payload = {
//             street : 'Disavägen 9',
//             city : 'Vallentuna'
//         }
//         res.writeHead(200, {"Content-Type" : "application/json"})
//         res.write(JSON.stringify(payload))
//         res.end()
//     }
//     else{
//         res.write('Du är på en annan adress')
//         res.end()
//     }
// })

// .listen(PORT , () => {
//     console.log(`Welcome to port ${PORT}`)
// })


// EXPRESS
// const express = require('express')

// vi deklarerar att vår app ska arbeta med express
// const app = express()

// Nedan gör vi ett enkelt GET request
// app.get('/', (request, response) => {
//     response.send('GET')
// }).listen(3000, () => {
//     console.log('Server startad på port 3000')
// })


// const express = require('express')
// const app = express()

// app.get('/', (request, response)=>{
//     response.send('Hej')
// })
// app.get('/one', (request, response)=>{
//     response.send('1')
// })
// app.get('/two', (request, response)=>{
//     response.send('2')
// })
// app.get('/three', (request, response)=>{
//     response.send('3')
// })

// .listen(3000, ()=>{
//     console.log('3000 är igång')
// })



const express = require('express')
const app = express()

// installerade EJS $npm i ejs - för att visa en fil beronde på vilken adress vi är på

// implementera ejs
app.set("view engine", "ejs")

// skapar en get
app.get('/', (request, response)=>{
    response.render('index', {name : 'Christopher'})
})

const userRouter = require('./routes/users')

// Middleware
app.use("/users", userRouter)

.listen(3000, ()=>{
    console.log('3000 är igång')
})


// nu ska vi skapa en router
