const express = require('express')

const app = express()

// Sätter upp EJS, det som hjälper att rendera ut filer
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

// Renderar ut form.ejs-filen som finns i views
app.get("/form", (req, res)=>{
    res.render('form')
})

// POST indikerar att vi ska skicka något vi vill posta
app.post("/form",(req, res)=>{

    // letar i body i index efter value="name", och loggar ut
    console.log(req.body.name)

    // send-funktionen skriver ut information
    res.send(`Hej du skrev in ${req.body.name}` )
})

app.listen(3000, ()=>{
    console.log('3000 är igång')
})
