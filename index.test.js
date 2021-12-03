//import the associated models from index.js
const {Menu, Restaurant, sequelize} = require('./index')

//test musician database CRUD
describe('Menu Database', () => {

    beforeAll(async() => {
        //reset database
        await sequelize.sync({force:true})
        //create array of bands
        const arrayOfMenu = [
            {menu_name: 'lunch'},
            {menu_name: 'Breakfast'}
        ]
        //create array of musicians
        const arrayOfRestaurant =[
            {Restaurant_name: 'Five Guys'},
            {Restaurant_name: 'Wendys'}
        ]
        //add arrays to database
        await Restaurant.bulkCreate(arrayOfRestaurant)
        await Menu.bulkCreate(arrayOfMenu)
    })

   // create instances of Musician Model for testin
    test('menu have name', async() => {
        //read test instance from db
        const testMenu = await Menu.findOne({where: {menu_name: 'Breakfast'}});
        expect(testMenu.menu_name).toBe('Breakfast')  
        expect(testMenu instanceof Menu).toBeTruthy()
        
    })  

    test('Resturants can have name', async() => {
        //read test instance from db
        //read test Band instance from db
        const testResturant = await Restaurant.findOne({where: {Restaurant_name: 'Wendy'}});
        //create 2 test instances of Musician
        const testMenu1 = await Menu.findOne({where: {menu_name: 'Starter'}})
        const testMenu2 = await Menu.findOne({where: {menu_name: 'Drinks'}})
        //add test musicians to test band
        //magic sequelize add method
        await testResturant.addMenu(testMenu1)
        await testResturant.addMenu(testMenu2)
        //retrieve list of musicians in this band
        const menuList = await testBand.getMenus()
        //assert that the list of musicians is length 2
        expect(menuList.length).toBe(2)
        //assert that the 0th index of the array musicianList is an instance of the model Musician
        expect(menuList[0] instanceof Menu).toBeTruthy()
        expect(menuList[0].menu_name).toMatch('Starter')
        
    }) 
})