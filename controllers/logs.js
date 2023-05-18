const express = require('express')
const router = express.Router()
const log = require('../models/logs')

// Index : Show all the things! - GET /logs
router.get('/', (req, res)=>{
    log.find({}).then(alllogs=>{ 
        console.log(`get all logs ${alllogs}`)
        res.render('Index', {
            logs: alllogs
        })
    })
})

// New : An empty form for a new thing - GET /logs/new
router.get('/new', (req, res) => {
    res.render('New')
})

// Delete : Get rid of this particular thing! - DELETE /logs/:id
router.delete('/:id', (req, res)=>{
    log.findByIdAndRemove(req.params.id).then(data =>{
        res.redirect('/logs') //redirect back to logs index
    })
})

// Update : Update this specific thing with this updated form - PUT /logs/:id
router.put('/:id', (req, res)=>{
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    } else {
        req.body.shipIsBroken = false
    }
    console.log('Update log...')
    log.findByIdAndUpdate(req.params.id, req.body).then(updatedLog=>{
        console.log(updatedLog)
        res.redirect(`/logs/${req.params.id}`)
    })
})

// Create : Make a new thing with this filled out form - POST /logs
router.post('/', (req, res) => {
    if(req.body.shipIsBroken === "on"){
        req.body.shipIsBroken = true
     } else {
        req.body.shipIsBroken =false
     }
    // logs.push(req.body) // pushing new log into logs array
    log.create(req.body).then(log  => {
        // res.send(createdlog)
        console.log('log')
    });
    
    res.redirect('/logs'); //send the user back to /logs
})
// Edit : A prefilled form to update a specific thing - GET /logs/:id/edit
router.get('/:id/edit', (req, res)=>{
    log.findById(req.params.id).then(foundLog=>{ //find the log
        ////pass in the found log so we can prefill the form
     res.render('Edit',{log: foundLog })
    }).catch(err=>{
        res.send({ msg: err.message })
    })
})
// Show : Show me this one thing! - GET /logs/:id (edited) 
// GET /logs/:id
router.get('/:id', (req, res)=>{
    log.findById(req.params.id).then(foundLog=>{
        res.render('Show', {
            log:foundLog
        })
    })
})


module.exports = router