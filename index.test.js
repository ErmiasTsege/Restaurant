//import the associated models from index.js
const {Menu, Restaurant, MenuItems,Customer,Order,sequelize} = require('./index')

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
            {Restaurant_name: 'Wendys'},
            {Restaurant_name: 'ArifeCafe'}
        ]
        const arrayOfMenuItems =[
            {menuItemName: 'Sandwitch',price:20.00},
            {menuItemName: 'salad',price:10.00},
            {menuItemName: 'juice',price:10.00}
        ]
        //add arrays to database
        await Restaurant.bulkCreate(arrayOfRestaurant)
        await Menu.bulkCreate(arrayOfMenu)
        await MenuItems.bulkCreate(arrayOfMenuItems)
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
        //read test resturant instance from db
       // const testResturant = await Restaurant.findAll({where:{Restaurant_name: 'ArifeCafe'}});

        const testResturant = await Restaurant.create({Restaurant_name: 'Mcdonald'});
        //create 2 test instances of menu
        // const testMenu1 = await Menu.findAll({where:{menu_name: 'lunch'}})
        // const testMenu2 = await Menu.findAll({where:{menu_name: 'Breakfast'}})
        const testMenu1 = await Menu.create({menu_name: 'Starter'})
        const testMenu2 = await Menu.create({menu_name: 'Drinks'})
        //add test menus to test restaurant
        //magic sequelize add method
        await testResturant.addMenu(testMenu1)
        await testResturant.addMenu(testMenu2)
        //retrieve list of menus in this restaurant
        const menuList = await testResturant.getMenus()
        //assert that the list of menus is length 2
        expect(menuList.length).toBe(2)
        //assert that the 0th index of the array menulist is an instance of the model Restaurant
        expect(menuList[0] instanceof Menu).toBeTruthy()
        expect(menuList[0].menu_name).toMatch('Starter')
        
    }) 

    test('Menu can have menu itmes', async() => {
        //read test instance from db
        //read test resturant instance from db
       // const testResturant = await Restaurant.findAll({where:{Restaurant_name: 'ArifeCafe'}});

        const testResturant = await Restaurant.create({Restaurant_name: 'Ihope'});
        //create 2 test instances of menu
        // const testMenu1 = await Menu.findAll({where:{menu_name: 'lunch'}})
        // const testMenu2 = await Menu.findAll({where:{menu_name: 'Breakfast'}})
        const testMenu1 = await Menu.create({menu_name: 'Starter'})
        const testMenu2 = await Menu.create({menu_name: 'Drinks'})
        const testMenuItems1 = await MenuItems.create({menuItemName: 'salad',price:10.00})
        const testMenuItems2 = await MenuItems.create({menuItemName: 'Smothie',price:10.00})

        //add test menus to test restaurant
        //magic sequelize add method
        await testResturant.addMenu(testMenu1)
        await testResturant.addMenu(testMenu2)
        await testMenu1.addMenuItem(testMenuItems1)
        await testMenu2.addMenuItem(testMenuItems2)
        //retrieve list of menus in this restaurant
        const menuList = await testResturant.getMenus()
        const menuItemsList=await testMenu1.getMenuItems()
        //assert that the list of menus is length 2
        expect(menuList.length).toBe(2)
        expect(menuItemsList.length).toBe(1)
        //assert that the 0th index of the array menulist is an instance of the model Restaurant
        expect(menuItemsList[0] instanceof MenuItems).toBeTruthy()
        expect(menuItemsList[0].menuItemName).toMatch('salad')       
        
    }) 

    test('Order can have menu itmes', async() => {
        //read test instance from db
        //read test resturant instance from db
       // const testResturant = await Restaurant.findAll({where:{Restaurant_name: 'ArifeCafe'}});
      
        const testCustomer = await Customer.create({customer_name: 'Abebe'});
        //create 2 test instances of menu
        
        const testOrder1 = await Order.create({Payment_type: 'card',Order_Date:'12/7/2021'})
        const testOrder2 = await Order.create({Payment_type: 'paypal',Order_Date:'12/8/2021'})
        const testMenuItems1 = await MenuItems.create({menuItemName: 'salad',price:10.00})
        const testMenuItems2 = await MenuItems.create({menuItemName: 'Smothie',price:10.00})

        //add test menus to test restaurant
        //magic sequelize add method
        await testCustomer.addOrder(testOrder1)
        await testCustomer.addOrder(testOrder2)
        await testOrder1.addMenuItems(testMenuItems1)
        await testOrder2.addMenuItems(testMenuItems2)    
        //retrieve list of menus in this restaurant        
        const menuItemsList=await testOrder1.getMenuItems()
        const OrderList = await testCustomer.getOrders()
        //assert that the list of menus is length 2
       // expect(menuList.length).toBe(2)
        expect(OrderList.length).toBe(2)
        //assert that the 0th index of the array menulist is an instance of the model Restaurant
        expect(OrderList[0] instanceof Order).toBeTruthy()
        expect(menuItemsList[0].menuItemName).toMatch('salad')   
        expect(OrderList[0].Payment_type).toMatch('card') 
        
    }) 
})
afterAll(async()=> {
    // await sequelize.sync({force:true})
    sequelize.close()
})