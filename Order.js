const {sequelize,DataTypes,Model}=require('./db')
const {Mu}

class Order extends Model{
    
}
  Order.init({
    customer_id:DataTypes.STRING,
    Payment_type:DataTypes.DATE
 
},{sequelize,
  timestamps:false})
  
  module.exports={Menu,Customer,Order,OrderLine}
  