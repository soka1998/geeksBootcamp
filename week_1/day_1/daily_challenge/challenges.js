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

        // Inner loop controls the number of stars in each line

        stars = stars + "*";
    }
    console.log(stars);
}


// ====== Daily Challenge 2: NOT BAD

let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
//check if "not and "bad" are in the sentence and "bad" follows "not" exists and if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // "!==" means strict not equal (checks both value and type)
    let newSentence = sentence.slice(0, wordNot)
        + "good"
        + sentence.slice(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}

// ====== Daily Challenge 3
