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
    let unique = [];



    for (let i = 0; i < a.length; i++){
        if (b.indexOf(a[i]) === -1) {
            unique.push(a[i]);
        }
    }
    for (let i = 0; i < b.length; i++){
        if (b.indexOf(b[i]) === -1) {
            unique.push(b[i]);
        }
    }
    return unique;

    // return a.filter(e => !b.includes(e))
}

// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") //=> WE ARE THE CHAMPIONS

// const songDecoder = (song) => song.replace(/(WUB)+/g, " ").trim()


// const rgb = (r, g, b) => {
//     function decToHex(c) {
//         if (c > 255) return "FF";
//         else if (c < 0) return "00";
//         else
//             return c
//                 .toString(16)
//                 .padStart(2, "0")
//                 .toUpperCase()        
//     }
//     return decToHex(r) + decToHex(g) + decToHex(b);
// }

////////////////////////////////////////////////////////

const validBraces = (braces) => {
    // let tracer = []
    // for(let i=0;i < braces.length; i++){
    //     if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
    //         tracer.push(braces[i])
    //     } else{
    //         if(tracer.length === 0) return false
    //         let lastValue = tracer[tracer.length-1]
    //         if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
    //         {
    //             tracer.pop()
    //         } else {
    //             break;
    //         }
    //     }
    // }
    // return tracer.length === 0
    let prev = "";
    while (braces.length != prev.length) {
        prev = braces;
        braces = braces
            .replace("()", "")
            .replace("[]", "")
            .replace("{}", "");
    }
    return (braces.length === 0);
}