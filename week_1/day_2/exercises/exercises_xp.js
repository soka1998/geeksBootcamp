// ===== Exercise 1 : Find the numbers divisible by 23
function findDivisibleBy23() {
    let sum = 0;

    for (let i = 0; i <= 500; i++) {

        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }


    }
    console.log(sum);
}
findDivisibleBy23();

// ===== Stock of items =====
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

// ===== Prices of items =====
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// ===== Our shopping list =====
const shoppingList = ["banana", "orange", "apple"]; // items in our cart

// ===== Function to calculate total bill =====
function myBill() {
    let total = 0; // variable to store total price

    // Loop through each item in shoppingList
    for (let i = 0; i < shoppingList.length; i++) {
        let item = shoppingList[i];

        // Check if item is in stock (> 0)
        if (item in stock && stock[item] > 0) {
            // Add its price to total
            total += prices[item];

            // Reduce the stock by 1 since we bought it
            stock[item]--;
        }
    }

    return total; // return the total price
}

// ===== Call the function and print the result =====
let totalPrice = myBill();
console.log("Total Price:", totalPrice); // Prints: Total Price: 5.5

// ===== Exercise 3: what's in my wallet
function changeEnough(itemPrice, amountOfChange) {
    // amountOfChange array format: [quarters, dimes, nickels, pennies]
    // Calculate total value of change
    let totalChange = 0;
    totalChange += amountOfChange[0] * 0.25; // quarters
    totalChange += amountOfChange[1] * 0.10; // dimes
    totalChange += amountOfChange[2] * 0.05; // nickels
    totalChange += amountOfChange[3] * 0.01; // pennies 
    //compare total change with item price
    if (totalChange >= itemPrice) {
        return true;
    } else {
        return false;
    }
}
// ===== Test the function =====
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true


// ===== Exercise 4 : Vacations costs
function hotelCost() {

    let nights;
    do {
        nights = Number(prompt("Enter number of nights you want to stay at the hotel:"));
    } while (isNaN(nights) || nights <= 0); // Validate input

    let costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("Enter your travel destination:").toLowerCase();
    } while (!destination); // Validate input
    destination = destination.toLowerCase();
    if (destination === "london") {
        return 183;
    } else if (destination === "paris") {
        return 220;
    } else {
        return 300;
    }
}
function rentalCareCost() {
    let days;
    do {
        days = parseInt(prompt("Enter number of days you want to rent a car:"));
    }
    while (isNaN(days) || days <= 0); // Validate input
    let costPerDay = days * 40;
    //discount for more than 10 days
    if (days > 10) {
        costPerDay *= 0.95; // Apply 5% discount
        return costPerDay; // 5% discount
    }
}

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCareCost();
    const totalCost = hotel + plane + car;
    console.log("The total cost of your vacation is: $" + totalCost);
    return totalCost;

}
totalVacationCost();
// ===== Exercise 5 : Users 
let div = document.getElementById("container");
console.log(div);
// ===== 2. Change the name "Pete" to "Richard" =====
let firstUl = document.querySelector("ul.list");
firstUl.children[1].textContent = "Richard";
console.log(firstUl);
// ===== 3. Delete the second <li> of the second <ul> =====
let secondUl = document.querySelectorAll("ul.list")[1];
secondUl.removeChild(secondUl.children[1]);
console.log(secondUl);

// ===== 4. Change first <li> of each <ul> to your name =====
let allUl = document.querySelectorAll("ul.list");
allUl.forEach(ul => {
    ul.children[0].textContent = "soukaina"; // Replace "Your Name" with your actual name
});

console.log(allUl);
//5 Add classes university and attendance to the first <ul> =====
firstUl.classList.add("university", "attendance");
console.log(firstUl);
//6 Add light blue background color and padding to the div =====
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";
console.log(div);

/// ===== 7. Do not display the <li> that contains "Dan" =====
let allLi = document.querySelectorAll("li");
allLi.forEach(li => {
    if (li.textContent === "Dan") {
        li.style.display = "none"; // hide it
    }
});

// ===== 8. Add a border to the <li> that contains "Richard" =====
allLi.forEach(li => {
    if (li.textContent === "Richard") {
        li.style.border = "2px solid black"; // add border
    }
});
//exercise 6 : Change the Navbar
//1. Change the text of the <a> which has a class of "navbar-brand" to "My Page"

let navDiv = document.getElementById("navBar");
console.log(navDiv);
//change the id using setAttribute
navDiv.setAttribute("id", "socialNetworkNavigation");
console.log(navDiv);


//Add a new <li> with text "logout" to the 
//Get the ul inside the div 
let ul = navDiv.querySelector("ul");
//Create a new li element
let newLi = document.createElement("li");

//Create a text node with "logout"
let text = document.createTextNode("Logout");


//Append the text to the new li
newLiappendChild(text);

//Append the new li to the ul
ul.appendChild(newLi);

// ===== 3. Get first and last <li> and display their text =====

//Get the first li
let firstLi = ul.firstElementChild;
console.log("First li text:", firstLi.textContent);

//Get the last li
let lastLi = ul.lastElementChild;
console.log("Last li text:", lastLi.textContent);

//display their text 
console.log("first link : ", firstLi.textContent);
console.log("first link : ", lastLi.textContent);

// ===== Exercise 7 : My Book List 
//Create the array of books 

let allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        alreadyRead: true
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        alreadyRead: false
    }
];
//Get the section from Html
let section = document.querySelector(".listBooks");
//loop through the books 
for (let i = 0; i < allBooks.length; i++) {
    //create a div for each book
    let bookDiv = document.createElement("div");

    //create a paragraph for title +author
    let bookDetails = document.createElement("p");
    bookDetails.textContent = allBooks[i].title + "written  by " + allBooks[i].author;

    //create an image element
    let bookImage = document.createElement("img");
    bookImage.src = allBooks[i].image;
    bookImage.style.width = "100px";

    // If the book is already read, make text red
    if (allBooks[i].isAlreadyRead === true) {
        bookDetails.style.color = "red";
    }
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImage);

    //Append the div to the section
    section.appendChild(bookDiv)

}


///note: queryselector brings the first element that matches the selector
//queryselectorall brings all the elements that match the selector