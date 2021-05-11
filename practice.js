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

const firstNonRepeatingLetter = (s) => {
    let lowercase = s.toLowerCase()
    for (let i = 0; i < lowercase.length; i++) {
        // console.log(lowercase.indexOf(lowercase.charAt(i)))
        console.log(lowercase.lastIndexOf(lowercase.charAt(i)))
        // if (lowercase.indexOf(lowercase.charAt(i)) === lowercase.lastIndexOf(lowercase.charAt(i))){
        //     return lowercase.charAt(i);
        // }
    }
}
firstNonRepeatingLetter('abcdcba')