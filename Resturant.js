const {sequelize,DataTypes,Model}=require('./db')

class Restaurant extends Model{
}

Restaurant.init({
    Restaurant_name:DataTypes.STRING,
},{sequelize,
  timestamps:false})

  module.exports={Restaurant}
  