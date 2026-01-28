// ===== Exercise 1 : Checking the BMI
let firstPerson = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calculateBMI: function () {
        return this.mass / (this.height * this.height);
    }
}
let secondPerson = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calculateBMI: function () {
        // BMI formula: weight / (height * height)
        return this.mass / (this.height * this.height);
    }
}
function compareBMI(person1, person2) {
    let bmi1 = person1.calculateBMI(); // Call method for first person
    let bmi2 = person2.calculateBMI(); // Call method for second person

    if (bmi1 > bmi2) {
        console.log(person1.fullName + " has the higher BMI: " + bmi1.toFixed(2));// toFixed(2) rounds the number to 2 decimal places and returns it as a string
    } else if (bmi2 > bmi1) {
        console.log(person2.fullName + " has the higher BMI: " + bmi2.toFixed(2));
    } else {
        console.log("Both have the same BMI: " + bmi1.toFixed(2));
    }
}
compareBMI(firstPerson, secondPerson);
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...