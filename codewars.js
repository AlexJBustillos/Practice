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


// const isPangram = (string) => {
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// const findOdd = (A) => {
    
//     return 0
// }

/////////////////////////////////////////////////////////////////

const arrayDiff = (a, b) => {
    newArr = []
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] != a[j] || b === []) {
                newArr.push(a[i])
            }
        }
    }
    return newArr
}