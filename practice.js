// How do you find the duplicate number on a given array

// const duplicateNumber = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         if (i === i) return i
//         else i += 1
//     }
//     return i
// }

// arr = [1, 1, 2, 5, 6, 9, 10]

// duplicateNumber(arr)
// const selectDiv = document.getElementById("practice")
// selectDiv.addEventListener('keydown', divListener)
// function divListener(e) {
//         selectDiv.textContent += `${e.code}`
// }

// function isHeaderEmpty() {
//     const headerObject = $(":header")
//     for (const property in headerObject) {
//         if (headerObject[property].innerHTML === "") {
//             headerObject[property].setAttribute("role", "presentation")
//         }
//     }
// }

// function theFinalCountdown(a, b) {
//     let countdown = a + b;
//     let time = setInterval(() => {
//         if (countdown === 0) {
//             clearInterval(time)
//         }
//         console.log(countdown);
//         countdown--
//     }, 1000)
// }
// theFinalCountdown(5, 5)

// const firstNonRepeatingLetter = (s) => {
//     let lowercase = s.toLowerCase()
//     for (let i = 0; i < lowercase.length; i++) {
//         // console.log(lowercase.indexOf(lowercase.charAt(i)))
//         console.log(lowercase.lastIndexOf(lowercase.charAt(i)))
//         // if (lowercase.indexOf(lowercase.charAt(i)) === lowercase.lastIndexOf(lowercase.charAt(i))){
//         //     return lowercase.charAt(i);
//         // }
//     }
// }
// firstNonRepeatingLetter('abcdcba')

// let alphaCypher = {'a': 28, 'b': 29, 'c': 30, 'd': 31, 'e': 32, 'f': 33, 'g': 34, 'h': 35, 'i': 36, 'j': 37, 'k': 38, 'l': 39, 'm': 28, 'n': 29, 'o': 28, 'p': 29, 'q': 30, 'r': 31, 's': 32, 't': 33, 'u': 34, 'v': 35, 'w': 36, 'x': 25, 'y': 26, 'z': 27}
// const rot13 = (message) => {
//     const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     const alphaCypher = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
//     let encoded = ''
//     for (let i=0; i < message.length; i++) {
//         if (message[i].match(/[^a-zA-z]/)) {
//             const index = alpha.indexOf(message[i]);
//             encoded += alphaCypher[index];

//         } else {
//             return message[i]
//         }
//     }
//     return encoded
// }

// const moveZeros = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             arr.push(arr.splice(arr.indexOf(arr[i]), 1)[0])
//         }
//     }
//     return arr
// }

// const validParentheses = (parens) => {
//     // const holder = []
//     // const openBrackets = ['(']
//     // const closedBrackets = [')']
//     // for ( let bracket of parens) {
//     //     if(openBrackets.includes(bracket)) {
//     //         holder.push(bracket)
//     //     } else if (closedBrackets.includes(letter)) {
//     //         const openPair = openBrackets[closedBrackets.indexOf(letter)]
//     //         if (holder[holder.length - 1] === openPair) {
//     //             holder.splice(-1, 1)
//     //         } else {
//     //             holder.push(bracket)
//     //             break
//     //         }
//     //     }
//     // }
//     // return (holder.length === 0)
//     let n = 0
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] === '(') n++;
//         if (parens[i] === ')') n--;
//         if (n < 0) return false;
//     }
//     return n == 0;
// }

// const duplicateCount = (text) => {
//     // console.log(text)
//     // const result = [];
//     // const strArr = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  
//     // if (strArr != null) {
//     //   strArr.forEach((elem) => {
//     //     result.push(elem[0]);
//     //   });
//     // }
//     // return result.length;
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// const comp = (array1, array2) => {
//     if(!array1 || !array2) return false;
//     console.log(array1);
//     array1 = array1.map(t => t**2).sort((a,b)=>a-b);
//     console.log(array1)
//     console.log(array2)
//     array2 = array2.sort((a,b)=>a-b);
//     console.log(array2);

//     for(let i=0;i<array1.length;i++){if(array1[i] !== array2[i])return false}
//     return true;
// }
// console.log(comp(a1, a2))

// // how to validate password with regex
// function validate(password) {
//     // return  /^[A-Za-z0-9]{6,}$/.test(password) &&
//     //         /[A-Z]+/           .test(password) &&
//     //         /[a-z]+/           .test(password) &&
//     //         /[0-9]+/           .test(password) ;

    
//     return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password);
      
//   }

//  const chooseBestSum = (t, k, ls) => {
//     let biggestCount = 0;
//     let recurseTowns = (townsSoFar, lastIndex) => {
//       townsSoFar = townsSoFar || [];
//       //base case
//       if (townsSoFar.length === k) {
//         let sumDistance = townsSoFar.reduce((a,b)=>a+b);
//         if (sumDistance <= t && sumDistance > biggestCount) {
//           biggestCount = sumDistance;
//         }      
//         return; //EJECT
//       }
//       //recursive case
//       for (let i = lastIndex + 1 || 0; i < ls.length; i++) {
//         recurseTowns(townsSoFar.concat(ls[i]), i);
//       }
//     }
//     recurseTowns();
    
//     return biggestCount || null;
//   }

//   const solutions = (input, markers) => {
//       let arr = input.split('\n')

//       for (let i = 0; i < markers.length; i++) {
//           arr = arr.map((el) => {
//             let ind = el.indexOf(markers[i]);
//             if (ind !== -1) return el.substring(0, ind);
//             else return el.replace(/\s*S/,'')  
//           })
//       }
//       return arr.join('\n').trim()
//   }

// // practice

// // Given an array of numbers
// // Find the highest number

// const highNumber = (arrayNumber) => {
//     // make variable equal to 0
//       let highestNumber = 0;
//     // forLoop, compare current element to variable
//       for (i = 0; i < arrayNumber.length; i++) {
//           // assign highest element to variable
//         let num = arrayNumber[i] 
//         // if(num > highestNumber){
//         //   highestNumber = num
//         // }
        
//         highestNumber = (num > highestNumber) ? num : highestNumber
//       }
//       // return variable
//       return highestNumber
// }
    
// highNumber([1, 5, 9, 4, 6])

// // Create a function that takes a string and 
// // returns a string in which each character is
// // repeated once.


// const duplicate = (string) => {
//     // take string, convert string into array
//     let stringArray = string.split('')	
//     let duplicateString = '';
    
//     // do a for loop, for each iteration add the same index
//     for (i = 0; i < stringArray.length; i++) {
//         let letter = stringArray[i];
//         duplicateString += (letter + letter)
//     }
//     // return converted array back to string
//     return duplicateString
//     }
    
// duplicate('hello')

// function getCHar(c){
//   return String.fromCharCode(c);

// }

// const seatsInTheater = (nCols, nRows, col, row) => {
//   return (nCols - col + 1) * (nRows - row);
// }

// const points = (games) => {
//   games.reduce((acc, game) => {
//     const [x, y] = game.split(':');
//     const points = x > y ? 3 : x === y ? 1 : 0;
//     acc += points;
//     return acc;
//   }, 0);
// }


// const isSolved = (board) => {
//   function isWinner(bo, le) {
//     if (
//       (bo[0][0] === le && bo[0][1] === le && bo[0][2] === le) ||
//       (bo[1][0] === le && bo[1][1] === le && bo[1][2] === le) ||
//       (bo[2][0] === le && bo[2][1] === le && bo[2][2] === le) ||
//       (bo[0][0] === le && bo[1][0] === le && bo[2][0] === le) ||
//       (bo[0][1] === le && bo[1][1] === le && bo[2][1] === le) ||
//       (bo[0][2] === le && bo[1][2] === le && bo[2][2] === le) ||
//       (bo[0][0] === le && bo[1][1] === le && bo[2][2] === le) ||
//       (bo[0][2] === le && bo[1][1] === le && bo[2][0] === le)
//     ) {
//       return true;
//     } else { return false; }
//   }

//   function emptySpots(bo) {
//     let empty = false;
//     bo.forEach( arr1 => {
//       arr1.forEach( arr2 => {
//         if (arr2 === 0) { empty = true ;}
//       })
//     })
//     return empty;
//   }

//   if (isWinner(board,1)) {
//     return 1;
//   } else if (isWinner(board, 2)) {
//     return 2;
//   } else if (emptySpots(board)) {
//     return -1;
//   } else {
//     return 0
//   }
// }

// const minMax = (arr) => {
//   min = Math.min( ...arr )
//   max = Math.max( ...arr )
//   return [min, max]
// }

// const binary = (decimal) => {
//   return decimal.toString(2)
// }

// // Create a function that takes a number as an argument. 
// // Add up all the numbers from 1 to the number you passed to the function. 
// // For example, if the input is 4 then your function should return 10 
// // because 1 + 2 + 3 + 4 = 10.
// function addUp(num) {
//   return (num * (num + 1))/2;
// }

// // Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// // Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//   let newSentenceArray = []
//   //1. split the sentence into words array
//   let wordArray = string.split(' ')
//   //2. go through the words  
//   for(let i = 0; i < wordArray.length ; i++){
//     //3. find if it has 5 or more letters
//     let word = wordArray[i]
//     if(word.length >= 5){
//     //4. 
//     //a. split the word into an array
//     let letterArray = word.split('')
//     //b. then reverse it
//     //c. revert into string
//       word = letterArray.reverse().join('')
//     }
//     //5. push words into a new array
//     newSentenceArray.push(word)
//     //6. revert back into a string
//   }
//   return newSentenceArray.join(' ')
// }

// spinWords('hey fellow warriors')




//-----------------------------------Practice-----------------------------------------
// const myFunc = () => {
//   console.log('hello')
// }

// // setTimeout
//   setTimeout(() => {
//     clearInterval(interval)
//   }, 4000)

  
// // setInterval 
//     let startTime = 0;

//     const interval = setInterval(() => {
//       startTime ++;
//       console.log(startTime);
      
//       // if(startTime === 3) {
//       //   clearInterval(interval)
//       // }
//     }, 1000)

// clearInterval

// function generateHashtag (str) {

//   var hashtag = str.split(' ').reduce(function(tag, word) {
//     console.log('>', tag, str, word)
//     return tag + word.charAt(0).toUpperCase() + word.substring(1);
//     // console.log('>>>>', hashtag)
//   }, '#');
//   console.log('>>', hashtag)
//   return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
// }
// console.log(generateHashtag('great work butthead'))

// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function(val, ingredient) {
//     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//   }, Infinity)  
// }

////////////////////////// BUS ON BUS OFF ///////////////////
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

///My Answer ////

var number = function(busStops){
  let arrayOn = []
  let arrayOff = []
  const reducer = (accumulator, curr) => accumulator + curr
  for (i = 0; i < busStops.length; i++) {
    let peopleOn = busStops[i][0]
    let peopleOff = busStops[i][1]
    arrayOn.push(peopleOn)
    arrayOff.push(peopleOff)
    
    
  }
  return arrayOn.reduce(reducer) - arrayOff.reduce(reducer) 
}