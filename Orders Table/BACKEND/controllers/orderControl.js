const order=require('../models/order')

exports.orderMain=(req,res,next)=>{
    order.findAll().then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
    });
}

exports.orderPost=(req,res,next)=>{
    order.create({
        price: req.body.price,
        dish: req.body.dish,
        table: req.body.table
    }).then((result) => {
        res.status(200).send(result)
    }).catch((err) => {
        res.status(400).send(err)
    });
}

exports.orderGet=(req,res,next)=>{
    // order.findAll().then((result) => {
    //     result.forEach(element=>{
    //         if(element.id==req.params.id){
    //             res.json(element)
    //         }
    //     })
    // }).catch((err) => {
    //     res.status(400).send(err)
    // });
    order.findByPk(req.params.id).then((result) => {
        if(result){
            res.json(result)
        }else{
            res.send('No Product Found to GET.')
        }
        
    }).catch((err) => {
        res.status(400).send(err)
    });
}

exports.orderDelete=(req,res,next)=>{
    order.findByPk(req.params.id).then((result) => {
        if(result){
            return result.destroy()
        }else{
            res.send('No Product Found to DELETE.')
        }
        
    }).then(result=>{
        res.status(200).send(result)
    }

    ).catch((err) => {
        console.log(err);
    });
}