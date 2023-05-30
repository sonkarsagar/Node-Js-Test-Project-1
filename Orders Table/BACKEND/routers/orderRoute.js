const express=require('express')
const router=express.Router()
const orderControl=require('../controllers/orderControl')

router.get('/order',orderControl.orderMain)

router.post('/order',orderControl.orderPost)

router.get('/order/:id',orderControl.orderGet)

router.delete('/order/:id',orderControl.orderDelete)

module.exports=router