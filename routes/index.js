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
router.get('/:id', async function(req, res, next) {
    try{
        res.json(await service.getSingleBerita(req.params.id))
    } catch (error) {
        console.error('Error while getting single berita', error.message)
        next(error)
    }
})
router.post('/', async function(req, res, next) {
    try{
        res.json(await service.createmessage(req.body))
    } catch (error) {
        console.error('Error while adding feedback', error.message)
        next(error)
    }
})

module.exports = router