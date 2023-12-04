const express = require('express')
const router = express.Router()
const service = require('../service')

router.get('/', async function(req, res, next) {
    try{
        res.json(await service.getAllBerita(req.query.page))
    } catch (error) {
        console.error('Error while getting all berita', error.message)
        next(error)
    }
})

module.exports = router