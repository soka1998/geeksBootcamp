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
// Exercise 6 : Calendar
// This function creates a calendar for a given year and month
function createCalendar(year, month) {

    // Names of the days (Monday to Sunday)
    const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    // ----------------------------------
    // Get the first day of the month
    // ----------------------------------
    // new Date(year, month - 1, 1) → first day of the month
    // getDay() → returns 0 (Sunday) to 6 (Saturday)
    let firstDay = new Date(year, month - 1, 1).getDay();

    // We want Monday = 0 instead of Sunday
    firstDay = (firstDay + 6) % 7;

    // ----------------------------------
    // Get how many days are in the month
    // ----------------------------------
    // Using day 0 of the next month gives the last day of this month
    let daysInMonth = new Date(year, month, 0).getDate();

    // ----------------------------------
    // Create the table
    // ----------------------------------
    let table = document.createElement("table");

    // ----------------------------------
    // Create the header row (MO, TU, WE...)
    // ----------------------------------
    let headerRow = document.createElement("tr");

    for (let day of days) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    // ----------------------------------
    // Create the calendar days
    // ----------------------------------
    let date = 1; // Start counting days from 1

    // Maximum 6 rows (weeks)
    for (let week = 0; week < 6; week++) {
        let tr = document.createElement("tr");

        // 7 days per week
        for (let day = 0; day < 7; day++) {
            let td = document.createElement("td");

            // Empty cells before the first day
            if (week === 0 && day < firstDay) {
                td.textContent = "";
            }
            // Empty cells after the last day
            else if (date > daysInMonth) {
                td.textContent = "";
            }
        }
    }
}




// ===== Exercise 4

// ===== Exercise ...