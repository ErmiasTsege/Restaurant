const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Menu } = require('./Menu')
const { Restaurant } = require('./Resturant')

//associate models
//adds foreign key to musician table connecting a musician instance to a specific band
Menu.belongsTo(Restaurant)
//gives us sequelize methods for a one to many relationship
Restaurant.hasMany(Menu)

//export models with added associations
module.exports = {Menu, Restaurant, sequelize}