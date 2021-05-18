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
const rot13 = (message) => {
    const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const alphaCypher = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
    let encoded = ''
    for (let i=0; i < message.length; i++) {
        if (message[i].match(/[^a-zA-z]/)) {
            const index = alpha.indexOf(message[i]);
            encoded += alphaCypher[index];

        } else {
            return message[i]
        }
    }
    return encoded
}

const moveZeros = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.push(arr.splice(arr.indexOf(arr[i]), 1)[0])
        }
    }
    return arr
}

const validParentheses = (parens) => {
    // const holder = []
    // const openBrackets = ['(']
    // const closedBrackets = [')']
    // for ( let bracket of parens) {
    //     if(openBrackets.includes(bracket)) {
    //         holder.push(bracket)
    //     } else if (closedBrackets.includes(letter)) {
    //         const openPair = openBrackets[closedBrackets.indexOf(letter)]
    //         if (holder[holder.length - 1] === openPair) {
    //             holder.splice(-1, 1)
    //         } else {
    //             holder.push(bracket)
    //             break
    //         }
    //     }
    // }
    // return (holder.length === 0)
    let n = 0
    for (let i = 0; i < parens.length; i++) {
        if (parens[i] === '(') n++;
        if (parens[i] === ')') n--;
        if (n < 0) return false;
    }
    return n == 0;
}

const duplicateCount = (text) => {
    // console.log(text)
    // const result = [];
    // const strArr = text.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
  
    // if (strArr != null) {
    //   strArr.forEach((elem) => {
    //     result.push(elem[0]);
    //   });
    // }
    // return result.length;
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
