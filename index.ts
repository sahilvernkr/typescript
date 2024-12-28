let myName: string = "Bob"
let numberOfWheels: number = 4
let isStudent: boolean = false

type Address = {
    streets: string
    city: string
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address: Address
}

let person1: Person = {
    name: "Joe",
    age: 23,
    isStudent: true,
    address:{
        streets: "123 str",
        city: "margao",
        country: "India"
    }
}

let person2: Person = {
    name: "Doe",
    age: 45,
    isStudent: false,
    address:{
        streets: "123 BV",
        city: "Hilversum",
        country: "Netherland"
    }
}