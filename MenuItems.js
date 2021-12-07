const {sequelize,DataTypes,Model}=require('./db')

class MenuItems extends Model{
}

MenuItems.init({   
    menuItemName:DataTypes.STRING,
    image:DataTypes.STRING,
    price:DataTypes.FLOAT,
    vegetarian:DataTypes.BOOLEAN,
    MenuId : DataTypes.INTEGER

},{sequelize,
  timestamps:false})

  module.exports={MenuItems}
  