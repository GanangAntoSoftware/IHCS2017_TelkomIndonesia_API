const express = require('express')
const router = express.Router()
const votesController = require('../controllers/voteControllers')

router.post('/', votesController.create)

router.get('/', votesController.all)
router.get('/sangatpuas', votesController.allSangatPuas)
router.get('/puas', votesController.allPuas)
router.get('/tidakpuas', votesController.allTidakPuas)

router.get('/female/', votesController.female)
router.get('/female/sangatpuas', votesController.femaleSangatPuas)
router.get('/female/puas', votesController.femalePuas)
router.get('/female/tidakpuas', votesController.femaleTidakPuas)

router.get('/male/', votesController.male)
router.get('/male/sangatpuas', votesController.maleSangatPuas)
router.get('/male/puas', votesController.malePuas)
router.get('/male/tidakpuas', votesController.maleTidakPuas)

module.exports = router
