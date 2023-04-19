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
//     console.log('Redo på http://localhost:3000/')
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
// INTE OK
// const http = require('http')

// const PORT = 8080
// const REDIRECT_URL = 'http://localhost:3000'

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
// OK
// const http = require('http')

// let count = 0

// const handleReq = (req, resp) => {
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

// const redirectReq = (req, resp) => {
//   resp.writeHead(302, { Location: 'http://localhost:3000/' })
//   resp.end()
// }

// const serv = http.createServer((req, resp) => {
//   if (req.url.startsWith('/redirect')) {
//     redirectReq(req, resp)
//   } else {
//     handleReq(req, resp)
//   }
// })

// serv.listen({ port: 3000 }, () => {
//   console.log('Redo på http://localhost:3000/')
// })

// const redirect = http.createServer((req, resp) => {
//   redirectReq(req, resp)
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
//     if("2a160d03-d430-4ce4-a79c-2cb14f626ee4" !== req.query['api-key']){
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
