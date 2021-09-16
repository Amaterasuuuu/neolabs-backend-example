const { Router } = require('express')
const { progLangController } = require('../controllers/prog-lang.controller')

const router = Router()

router.get('/programming-languages', progLangController.find)
router.get('/programming-languages/:lang', progLangController.findOne)
router.post('/programming-languages/create', progLangController.create)

module.exports = router
