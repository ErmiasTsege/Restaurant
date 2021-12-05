const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Menu } = require('./Menu')
const { Restaurant } = require('./Resturant')
const { MenuItems } = require('./MenuItems')
//associate models
//adds foreign key to musician table connecting a musician instance to a specific band
Menu.belongsTo(Restaurant)
//gives us sequelize methods for a one to many relationship
Restaurant.hasMany(Menu)

MenuItems.belongsTo(Menu)
//gives us sequelize methods for a one to many relationship
Menu.hasMany(MenuItems)


//export models with added associations
module.exports = {Menu,MenuItems, Restaurant, sequelize}