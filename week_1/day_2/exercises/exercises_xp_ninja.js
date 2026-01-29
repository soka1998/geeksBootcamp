// ===== Exercise 1 : Random Number
let randomNumber = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
console.log("Random Number:", randomNumber);

for (let i = 0; i <= randomNumber; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    }
}

// ===== Exercise 2 : Capitalized letters
//Create a function that takes a string as an argument.
// Create a function that takes a string as an argument
function capitalizeWords(str) {

    // Convert the entire string to lowercase to ensure consistency
    str = str.toLowerCase();

    // This string will store the version where even indexes are capitalized
    let evenCapitalize = "";

    // This string will store the version where odd indexes are capitalized
    let oddCapitalize = "";

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {

        // Check if the current index is even
        if (i % 2 === 0) {

            // Capitalize the character at even index
            evenCapitalize += str[i].toUpperCase();

            // Keep the character lowercase for the odd-capitalized version
            oddCapitalize += str[i];

        } else {
            // If the current index is odd

            // Keep the character lowercase for the even-capitalized version
            evenCapitalize += str[i];

            // Capitalize the character at odd index
            oddCapitalize += str[i].toUpperCase();
        }
    }

    // Return both results as an array
    return [evenCapitalize, oddCapitalize];
}
//Test the function

console.log(capitalizeWords("abcdef")); // Output: ["AbCdEf", "aBcDeF"]
console.log(capitalizeWords("Hello World!")); // Output: ["HeLlO WoRlD!", "hElLo wOrLd!"]


// ===== Exercise 6 : Calendar
function createCalendar(year, month) {

    // Days of the week (Monday → Sunday)
    const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    // Get the first day of the month
    let firstDay = new Date(year, month - 1, 1).getDay();
    firstDay = (firstDay + 6) % 7; // Make Monday = 0

    // Get number of days in the month
    let daysInMonth = new Date(year, month, 0).getDate();

    // Create table
    let table = document.createElement("table");
    table.border = "1";

    // ===== Create table header =====
    let headerRow = document.createElement("tr");

    for (let day of days) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    // ===== Create days =====
    let date = 1;

    for (let i = 0; i < 6; i++) { // max 6 weeks
        let tr = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            let td = document.createElement("td");

            if (i === 0 && j < firstDay) {
                td.textContent = "";
            } else if (date > daysInMonth) {
                td.textContent = "";
            } else {
                td.textContent = date;
                date++;
            }

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    // Add table to page
    document.body.appendChild(table);
}

// Call the function
createCalendar(2024, 9);




// ===== Exercise 4

// ===== Exercise ...