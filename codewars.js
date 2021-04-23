const solution = (number) => {
    for (i = 0; i <= number.length; i++) {
        if (number % 3 === 0) {
            return number++
        } else if (number % 5 === 0) {
            return number++
        } else {
            return 0
        }
    }
    return number
}

console.log(solution(10));