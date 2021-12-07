const {sequelize} = require('./db')
//const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?
const {Restaurant} = require('./Resturant')
const {Menu} = require('./Menu')
const {MenuItems}=require('./MenuItems')

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    Restaurant_name: 'AppleBees',
    location: 'Texas',
    cuisine: 'FastFood'
  },
  {
    Restaurant_name: 'LittleSheep',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    Restaurant_name: 'Spice Grill',
    location: 'Houston',
    cuisine: 'Indian'
  },
  {
    Restaurant_name: 'burgetking',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    Restaurant_name: 'MCDS',
    location: 'Dallas',
    cuisine: 'Hotpot'
  }
]

const seedMenu = [
  {
    menu_name: 'Breakfast',
    RestaurantId : 1,
  },
  {
    menu_name: 'Lunch',
    RestaurantId : 2,
  },
  {
    menu_name: 'Dinner',
    RestaurantId : 3,
  },
]

const seedItem = [
  {
    menuItemName: 'bhindi masala',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: true,
    MenuId : 3,
  },
  {
    menuItemName: 'egusi soup',
    image: 'someimage.jpg',
    price: 10.50,
    vegetarian: false,
    MenuId : 2,
  },
  {
    menuItemName: 'hamburger',
    image: 'someimage.jpg',
    price: 6.50,
    vegetarian: false,
    MenuId : 1,
  }
]

//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
     await Menu.bulkCreate(seedMenu, {validate: true})
    await MenuItems.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })