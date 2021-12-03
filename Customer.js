const {sequelize,DataTypes,Model}=require('./db')


class Customer extends Model{
    
}

Customer.init({
    category:DataTypes.STRING,
    menu_items:DataTypes.STRING,
    price:DataTypes.INTEGER
},{sequelize,
  timestamps:false})

  
  
  module.exports={Customer}
  