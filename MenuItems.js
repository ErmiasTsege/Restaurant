const {sequelize,DataTypes,Model}=require('./db')

class MenuItems extends Model{
}

MenuItems.init({   
    menuItemName:DataTypes.STRING,
    price:DataTypes.FLOAT
},{sequelize,
  timestamps:false})

  module.exports={MenuItems}
  