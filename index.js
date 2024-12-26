const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 10},
    {name: "Dominator", price: 10},
    {name: "Veggie", price: 9},
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj){
    menu.push(pizzaObj);
}

function placeOrder(pizzaName){
    const pizzaItem = menu.find(item => item.name === pizzaName);

    if (!pizzaItem) {
        console.log("Pizza is not on the menu.");
    }
    
}