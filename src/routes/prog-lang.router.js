const { Router } = require('express')
const { progLangController } = require('../controllers/prog-lang.controller')

const router = Router()

router.get('/programming-languages', progLangController.find)

module.exports = router
