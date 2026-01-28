


// ===== Exercise 1 :Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        // If the remainder is 0, the number is divisible by 3
        console.log(true)
        //console.log(numbers[i] + " is divisible by three"); 

    } else {
        console.log(false)
        // console.log(numbers[i] + " is not divisible by three");
    }

}
// ===== Exercise 2 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}
//let student = prompt("Enter your name:");
// Convert the input to lowercase so it matches the keys in guestList
//student = student.toLowerCase();

// Check if the entered name exists as a key in the guestList object
//if (student in guestList) {
// guestList[student] retrieves the value (country) associated with that name
//  console.log("Hi! I'm " + student + ", and I'm from " + guestList[student] + ".");
//} else {
// console.log("Hi,I'm  guest.");
//}

// ===== Exercise 3: playing with numbers 
let age = [20, 5, 12, 43, 98, 55];
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log("The sum of ages is: " + sum);
//Highest age
let maxAge = age[0]; // Start with the first age as maximum
for (let i = 1; i < age.length; i++) {// Start from second element
    if (age[i] > maxAge) {// Compare current element with max
        maxAge = age[i]; // Update max if current is bigger
    }
}
console.log("Highest age:", maxAge);


// ===== Exercise 4

// ===== Exercise ...