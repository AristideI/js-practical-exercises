class People {
    constructor(firstName, lastName, age, sport, food, drink){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.sport = sport
        this.food = food
        this.drink = drink
    }

    names(){
        console.log(this.firstName + " " + this.lastName)
    }

}

let aristide = new People("Aristide", "Isingizwe", 17, "football", "fries", "beer")

let yve = Object.create(aristide)

yve.firstName = "Yves"
yve.lastName = "Kwizera"

