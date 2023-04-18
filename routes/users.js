const express = require('express')

// Router()-funktionen är inbyggd i express
const router = express.Router()


// Alla dynamiska adresser ska ligga längst ner (adressparametrar)
// Alla statiska adresserna ska ligga överst



// detta lägger sig efter rotadressen
router.get('/:id', (req, res)=>{
    console.log(req.user)
    res.send(`Kolla id ${req.params.id}`)
})

module.exports = router
