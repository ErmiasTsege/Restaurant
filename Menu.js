const {sequelize,DataTypes,Model}=require('./db')
class Menu extends Model{
}

Menu.init({    
    menu_name:DataTypes.STRING
},{sequelize,
  timestamps:false})
  module.exports={Menu}
  