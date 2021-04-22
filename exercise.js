// [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

// const openOrSenior = (data) => {
//     data.map((info) => {
//         if (info[0] >= 55 && info[1] > 7) {
//             return 'Senior';
//         } else {
//             return 'Open';
//         }
//     })
// }

// const openOrSenior = (data) => data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');

////////////////////////////////////////////////////////////


// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") => WE ARE THE CHAMPIONS

// const songDecoder = (song) => song.replace(/(WUB)+/g, " ").trim()

// console.log(songDecoder("AWUBBWUBC"));

////////////////////////////////////////////////////////////


// const sumTwoSmallestNumbers = (numbers) => {
//     const [firstNumber, secondNumber] = numbers.sort((a, b) => a - b);
//     return firstNumber + secondNumber;
// }

// const numbers = [19, 5, 42, 2, 77]
// console.log(sumTwoSmallestNumbers(numbers));


////////////////////////////////////////////////////////////


// const alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");

// const alphabetPosition = (text) => {
//     // alphabet.indexOf()
//     return text
//     .toLowerCase()
//     .replace(/[^a-zA-Z]/g, "")
//     .split("")
//     .map((letter) => alphabet.indexOf(letter) + 1)
//     .join(' '); 
// }

// console.log(alphabetPosition("The sunset sets at twelve o'clock."));

const getCount = (str) => {
    // var vowelsCount = 0;
    // for (const letter of str) {
    //     if (
    //         letter === "a" || 
    //         letter === "e" || 
    //         letter === "i" || 
    //         letter === "o" || 
    //         letter === "u") {
    //             vowelsCount++;
    //     }

    // }
    // return vowelsCount;

    let vowelCount = 0;
    for (const letter of str) {
        if(letter.match(/[aeiou]/g)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(getCount("abracadabra"));