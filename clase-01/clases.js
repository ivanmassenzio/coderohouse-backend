class User {
    constructor(firstName, lastName, age, address){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.address = address
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }

    incrementAge() {
        this.age++
    }

    getAge(){
        return this.age;
    }
}

const user1 = new User('Luis', 'Ruiz', 23, 'catamarca 223')

console.log(user1.getFullName())
user1.incrementAge()
console.log(user1.getAge())