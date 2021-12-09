const {sequelize,DataTypes,Model}=require('./db')


class Customer extends Model{
    
}

Customer.init({
    customer_name:DataTypes.STRING
    
},{sequelize,
  timestamps:false})

  
  
  module.exports={Customer}
  