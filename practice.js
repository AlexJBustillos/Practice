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

// function isEmpty( el ){
//     return !$.trim(el.html())
// }
function emptyHeader() {
    if ($(":header").html().length === 0 ) {
        $(":header").attr("role", "presentation")
    }

}

// $(":header").is($(":empty"))