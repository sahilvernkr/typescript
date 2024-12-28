"use strict";
let myName = "Bob";
let numberOfWheels = 4;
let isStudent = false;
let person1 = {
    name: "Joe",
    age: 23,
    isStudent: true
};
let person2 = {
    name: "Doe",
    age: 45,
    isStudent: false,
    address: {
        streets: "123 BV",
        city: "Hilversum",
        country: "Netherland"
    }
};
function displayInfo(person) {
    var _a;
    console.log(`${person.name} lives at ${(_a = person.address) === null || _a === void 0 ? void 0 : _a.streets}`);
}
displayInfo(person1);
let ages = [100, 200, 300];
