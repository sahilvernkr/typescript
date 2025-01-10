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
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 23,
    isStudent: true
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

function displayInfo(person: Person){
    console.log(`${person.name} lives at ${person.address?.streets}`)
}

displayInfo(person1)

let ages: number[] = [100, 200, 300]

//unions
type UserRole = "guest" | "member" | "admin"
let role: UserRole = "guest"

//using any will not make typescript any more type strict :p
let value: any = 1
value = "hello"

//generics
const gameScore = [12,43,23,56,23]

function getLastItem<Type>(array: Type[]): Type | undefined{
    return array[array.length - 1]
}

console.log(getLastItem(gameScore))