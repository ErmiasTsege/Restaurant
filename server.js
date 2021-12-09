const express = require('express')
const cors=require('cors')
const path = require('path') //node native module
const { Restaurant } = require('./Resturant')
const { Menu } = require('./Menu')
const { MenuItems } = require('./MenuItems')
const app = express()
const port = 3000

//Otherwise you have to JSON.parse(req.body) in each of your route handlers

app.use(express.json())
app.use(cors());
//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
app.get('/flipcoin', (req, res) => {
    let coinflip = Math.floor(Math.random()*2)
    if (coinflip == 1){
        coinflip = 'Heads'
    } else {
        coinflip = 'Tails'
    }
    res.send(coinflip)
})

//GET method on /restaurants route returns all restaurants
app.get('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
    const allRestaurants = await Restaurant.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allRestaurants)
})
app.get('/restaurants/:name', async (req,res) => {
    //find all instances of the Model Restaurant
   // let id=req.params.id
      // id= parseInt(id)
    //console.log(id)
   const allRestaurantsById = await Restaurant.findOne({where:{Restaurant_name:req.params.name}})
    //respond with allRestaurants as a json objeect
    //const idR=id;
    //res.render({id:idR})
    res.json(allRestaurantsById)
})
app.post('/restaurants', async (req,res) => {
    //find all instances of the Model Restaurant
  let newRestaurant=await Restaurant.create(req.body)      
    res.send("Restaurant created")
})
app.put('/restaurants/:id', async (req,res) => {
    //find all instances of the Model Restaurant
  let updatedRestaurant=await Restaurant.update(req.body,{where:{id:req.params.id}})      
    res.send(updatedRestaurant?"Restaurant updated":"update Failed")
})
// app.put('/restaurants', async (req,res) => {
//     //find all instances of the Model Restaurant
//     const idArray=[1,2]
//     let updatedRestaurantArray
//     for(i=0;i<idArray.length;i++){
//         updatedRestaurantArray=await Restaurant.update(req.body,{where:{id:idArray[i]}}) 
//     }      

     
//     res.send(updatedRestaurantArray?"Restaurant updated":"update Failed")
// })

app.delete('/restaurants/:id', async (req,res) => {
    //find all instances of the Model Restaurant
  let deletRestaurant=await Restaurant.destroy({where:{id:req.params.id}})      
    res.send(deletRestaurant?"Restaurant deleted":"Delete Failed")
})
app.get('/menus', async (req,res) => {
    //find all instances of the Model Restaurant
    const allMenus = await Menu.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allMenus)
})



app.get('/search', async (req,res) => {
    //find all instances of the Model Restaurant
    let results = []    
     results = await Restaurant.findAll({where:{Restaurant_name: req.query.Restaurant_name}})
     res.json(results)
   })
app.get('/menuitems', async (req,res) => {
    //find all instances of the Model Restaurant
    const allMenuItems = await MenuItems.findAll()
    //respond with allRestaurants as a json objeect
    res.json(allMenuItems)
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})