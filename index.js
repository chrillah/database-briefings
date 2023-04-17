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


