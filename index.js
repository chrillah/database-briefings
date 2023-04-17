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

// Avancera - 4) En adressparameter utan Express - INTE OK
const http = require('http')
let count = 0
const app = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write('Hejsan svejsan.')
    } else if (request.url === '/count') {
        if (request.method === 'GET') {
            response.write(`${count}`)
        } else {
            response.statusCode = 405
        }
    } else if (request.url === '/increment') {
        if (request.method === 'POST') {
            count++
            response.write(`${count}`)
        } else {
            response.statusCode = 405
        }
    } else if (request.url.startsWith('/add/') && request.method === 'POST') {
        const number = parseInt(request.url.split('/')[2])
        count += number
        response.write(`${count}`)
    } else if (request.url === '/foo') {
        response.write('bar')
    } else if (request.url === '/baz') {
        response.write('qux')
    } else {
        response.statusCode = 404
    }
    response.end()
})
app.listen({ port: 8080 }, () => {
    console.log('Redo på http://localhost:8080/')
})
