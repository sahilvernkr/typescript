var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Dominator", price: 10 },
    { name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (item) { return item.name === pizzaName; });
    if (!selectedPizza) {
        console.error("Pizza is not on the menu.");
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (item) { return item.id === orderId; });
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken BBQ", price: 8 });
addNewPizza({ name: "Spicy Sausage", price: 8 });
addNewPizza({ name: "Chicken Bacon Ranch", price: 8 });
placeOrder("Chicken BBQ");
completeOrder(1);
console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);
