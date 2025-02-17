type Pizza = {
    id?: number,
    name: string
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

let nextPizzaId = 1 ;
let menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Dominator", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id : nextPizzaId++,
        ...pizzaObj
    }
    
    menu.push(newPizza);
    return newPizza
}

function placeOrder(pizzaName: string): Order | undefined {
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

function completeOrder(orderId: number): Order {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        throw new Error(`${orderId} was not found in the orderQueue`)
    }
    order.status = "completed";

    return order;
}

export function getPizzaDetail(identifier: number | string):Pizza | undefined  {
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

addNewPizza({ name: "Chicken BBQ", price: 8 })
addNewPizza({ name: "Spicy Sausage", price: 8 })
addNewPizza({ name: "Chicken Bacon Ranch", price: 8 })

placeOrder("Chicken BBQ");
completeOrder(1);

console.log("Menu", menu);
console.log("Cash in register", cashInRegister);
console.log("Order queue", orderQueue);

