const {Sequelize,DataTypes,Model}=require('sequelize')

const sequelize= new Sequelize('database','username','password',{
    dialect:'sqlite',
    storage:'./restaurant.sqlite',
    logging:false
})


sequelize.authenticate().then(console.log("connected")).catch(error=>{console.error('not able to connect',error)});
module.exports={sequelize,DataTypes,Model}