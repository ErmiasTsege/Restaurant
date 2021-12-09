const {sequelize,DataTypes,Model}=require('./db')


class Order extends Model{
    
}
  Order.init({    
    Payment_type:DataTypes.STRING,
    Order_Date:DataTypes.STRING
},{sequelize,
  timestamps:false})
  
  module.exports={Order}
  