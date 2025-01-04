type Pizza = {
    id: number,
    name: string
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Dominator", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(item => item.name === pizzaName);

    if (!selectedPizza) {
        console.error("Pizza is not on the menu.");
        return;
    }

    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder);

    return newOrder;
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed";

    return order;
}

export function getPizzaDetail(identifier: number | string) {
    if (typeof (identifier) === 'number') {
        return menu.find(item => item.id === identifier)
    }
    else if (typeof (identifier) === 'string') {
        return menu.find(item => item.name.toLowerCase === identifier.toLowerCase)
    }
    else {
        throw new TypeError("Parameter `identifier` must be either a  string or number")
    }
}

addNewPizza({ id: 5, name: "Chicken BBQ", price: 8 })
addNewPizza({ id: 6, name: "Spicy Sausage", price: 8 })
addNewPizza({ id: 7, name: "Chicken Bacon Ranch", price: 8 })

placeOrder("Chicken BBQ");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);

