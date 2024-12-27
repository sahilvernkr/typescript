const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Dominator", price: 10 },
    { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(item => item.name === pizzaName);

    if (!selectedPizza) {
        console.log("Pizza is not on the menu.");
    }

    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder);

    return newOrder;
}

function completeOrder(orderId) {
    const order = orderQueue.find(item => item.id === orderId);
    order.status = "completed";

    return order;
}

addNewPizza({ name: "Chicken BBQ", price: 8 })
addNewPizza({ name: "Spicy Sausage", price: 8 })
addNewPizza({ name: "Chicken Bacon Ranch", price: 8 })

placeOrder("Chicken BBQ");
completeOrder("1");

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);
