// ===== Exercise 1 List of people
const people = ["Greg", "Mary", "Devon", "James"];
//remove "greg"
people.shift();
console.log(people);

//Replace "James" with "Jason"
people[2] = "Jason";
console.log(people);


//Add my name to the end of the array
people.push("Soukaina");
console.log(people);

//console.log Mary's index
console.log(people.indexOf("Mary"));

//copy the array without Mary or my name
const newPeople = people.slice(1, 3);
console.log(newPeople);

//Index Of FOO
console.log(people.indexOf("Foo")); //returns -1
//because Foo is not in the array


//Last eemlement in the array 
let last = people[people.length - 1];
console.log(last);
//Part 2 LOOPs
//Looping through people 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


//Loop and stop after Devon 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}



// ===== Exercise 2: favorite colors
let colors = ["blue", "red", "green", "yellow", "purple"];

for (let i = 0; i < colors.length; i++) {
    //since indexes strt from 0 we add 1 to i 
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}

//Add suffixes
let suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}




// ===== Exercise 3 : Repeat the question 
let num = Number(prompt("Enter a number:"));
while (num < 10) {
    num = Number(prompt("Try agin, Enter a number:"));
}



// ===== Exercise 4 : Building Mnagement 
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        Sarah: [3, 990],
        Dan: [4, 1000],
        David: [1, 500],
    },
}

//Number of floors 
console.log(building.numberOfFloors);

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);


console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.Dan[0]);

//Check rent and update if needed
if (building.numberOfRoomsAndRent.Sarah[1] + building.numberOfRoomsAndRent.David[1] > building.numberOfRoomsAndRent.Dan[1]) {
    building.numberOfRoomsAndRent.Dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.Dan[1]);


// ===== Exercise 5 : Family
let family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};
//print keys with for in loop 
for (let key in family) {
    console.log(key);
}
//print values with for in loop
for (let key in family) {
    console.log(family[key]);
}



// ===== Exercise 5 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reinder'
};
// Initialize an empty string to build the sentence
let sentence = ""
for (let key in details) {
    // Add the key, a space, its value, and another space to the sentence
    sentence += key + " " + details[key] + " ";

}
// Remove any extra spaces at the beginning or end and display the result
console.log(sentence.trim());


// ===== Exercise 6 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let society = "";
//sort the names alphabetically
for (let i = 0; i < names.length; i++) {
    names.sort();
    society += names[i][0];
}
console.log(society);




