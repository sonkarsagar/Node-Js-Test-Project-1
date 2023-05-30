const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const order=sequelize.define('order',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true, 
        allowNull: false,
        primaryKey: true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    dish:{
        type: Sequelize.STRING,
        allowNull:false
    },
    table:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports=order