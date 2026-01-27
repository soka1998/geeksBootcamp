// ====== Daily Challenge 1 : stars

let stars = "";// This variable will store the stars we build step by step
for (let i = 1; i <= 6; i++) {
    // Add one star to the string in each iteration
    stars = stars + "*";
    console.log(stars);
}
//nested loop 
//for lines 6
for (let i = 1; i <= 6; i++) {
    let stars = "";
    //for stars in each line
    for (let j = 1; j <= i; j++) {

        // Inner loop controls the number of stars in each row

        stars = stars + "*";
    }
    console.log(stars);
}





// ====== Daily Challenge 2

// ====== Daily Challenge 3
