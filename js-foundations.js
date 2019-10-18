// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".

    const divisibleByThree = (number) => {
        return number % 3 === 0 ? `${number} is divisible by three` : `${number} is not divisible by three`
    }
    
    // console.log(divisibleByThree(15));
    // console.log(divisibleByThree(0));
    // console.log(divisibleByThree(385));
    // console.log(divisibleByThree(-7))



// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.

    const helloMe = {
        firstName: 'Lisa',
        lastName: 'Kamino',
        birthplace: 'California',
        favoriteCandy: 'Sour Patch Kids',
        aboutMe: function() {
            return `My name is ${this.firstName} ${this.lastName}. I was born in ${this.birthplace}. My favorite candy is ${this.favoriteCandy}.`
        }
    }
    
    // console.log(helloMe.aboutMe())
    



// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"

// const makeString = (array) => {
//     let everyOther = [];
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             everyOther.push(array[i]) ;
//         }
//     }
//     return everyOther.join(' ');
// }

// const makeString = (array) => {
//     let everyOther = [];
//     array.forEach((item, index) => {
//         if (index % 2 === 0) {
//             everyOther.push(item);
//         }
//     })
//     return everyOther.join(' ')
// }

const makeString = (array) => {
    return array.filter((word, index) => index % 2 === 0).join(' ')
}


// console.log(makeString(randomNouns))



// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capitalizeWords = (array) => {
    return array.map(word => word[0].toUpperCase() + word.slice(1));
}

// console.log(capitalizeWords(randomNouns))



// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

const stringLength = (array) => {
    return array.map(word => word.length)
}

// console.log(stringLength(randomNouns))


// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

const alphabetSoup = (string) => {
    return string.split('').sort().join('');
}

// console.log(alphabetSoup(testString1));
// console.log(alphabetSoup(testString2));
// console.log(alphabetSoup(testString3));



// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

const alphabetString = (...strings) => {
    return strings.join('').split('').sort().join('')
}

// console.log(alphabetString(testString1, testString2, testString3))



// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

// const combinedString = (array1, array2) => {
//     let newString = ''
//     //for all elements except for the last element, add a space after the animal type
//     for (let i = 0; i < array1.length -1; i++) {
//         newString += `${amounts[i]} ${animals[i]} `
//     }
//     //for the last element, do not add a space after the animal type
//     newString += `${amounts[array1.length-1]} ${animals[array1.length-1]}`
//     return newString
// }

const combinedString = (numberArray, animalArray) => {
    let combinedArray = []
    for (let i = 0; i < numberArray.length; i++) {
        let number = numberArray[i]
        let species = animalArray[i]
        let numAnimals = `${number} ${species}`
        combinedArray.push(numAnimals)
    }
    return combinedArray.join(' ')
}

console.log(combinedString(amounts, animals))




// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

// const updateToSingular = (numberArray, speciesArray) => {
//     let newString = '';
    
//     //for all elements except for the last element, add a space after the animal type
//     for (let i = 0; i < numberArray.length -1; i++) {
//         if (numberArray[i] === 1) {
//             newString += `${numberArray[i]} ${speciesArray[i].slice(0, speciesArray[i].length -1)} `
//         } else {
//             newString += `${numberArray[i]} ${speciesArray[i]} `
//         }
//     }
    
//     //for the last element, do not add a space after the animal type
//     if (numberArray[numberArray.length-1] === 1) {
//         newString += `${numberArray[numberArray.length-1]} ${speciesArray[numberArray.length -1].slice(0, speciesArray[numberArray.length -1].length -1)}`
//     } else {
//         newString += `${numberArray[numberArray.length-1]} ${speciesArray[numberArray.length -1]}`
//     }
//     return newString
// }

const updateToSingular = (numberArray, animalArray) => {
    let combinedArray = []
    for (let i = 0; i < numberArray.length; i++) {
        let number = numberArray[i]
        let species = animalArray[i]
        if (number === 1) {
            species = species.slice(0, species.length -1)
        }
        let numAnimals = `${number} ${species}`
        combinedArray.push(numAnimals)
    }
    return combinedArray.join(' ')
}

console.log(updateToSingular(amounts, animals))