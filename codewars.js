// const solution = (number) => {
//     for (i = 0; i <= number.length; i++) {
//         if (number % 3 === 0 || number % 5 === 0) {
//             return number++
//         } else {
//             return 0
//         }
//     }
//     return number
// }

// console.log(solution(10));

//////////////////////////////////////////////////////////////


const isPangram = (string) => {
    return string.match(/[^a-zA-Z]/g) ? true : false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));