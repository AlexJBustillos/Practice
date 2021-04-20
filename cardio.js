function reverseString(str) {
    // const strArray = str.split('');
    // strArray.reverse();
    ///////////////////////////////////
    
    // return strArray.join('');
    // return str
    //     .split('')
    //     .reverse()
    //     .join();
    ///////////////////////////////

    // let revString = '';
    // for (let i = str.length - 1; i >= 0; i--){
    //     revString = revString + str[i];
    // }
    // return revString;
    ////////////////////////////////////

    // let revString = '';
    // for (let i = str.length - 1; i <= 0; i++){
    //     revString = revString + str[i];
    // }
    // return revString;
    //////////////////////////////////////


    // let revString = '';
    // for (let char of str){
    //     revString = revString + char;
    // }
    // return revString;
    //////////////////////////////////////

    // let revString = '';
    // str.split('').forEach(char => 
    //     revString = char + revString
    // );
    // return revString;
    /////////////////////////////////////

    return str.split('').reduce((revString, char) => char + revString
    , '');
}

function isPalindrome(str) {
    const revString = str.split('').reverse().join('');

    return revString === str;
}

function reverseInt(int) {
    const revString = int.toString().split('').reverse().join('');
    return parseInt(revString) * Math.sign(int);
}

function capitalizeLetters(str) {
    // const strArr = str.toLowerCase().split(' ');

    // for (let i = 0; i < strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }

    // return strArr.join(' ');
    ///////////////////////////////////

    // return str
    // .toLowerCase()
    // .split('')
    // .map(word => word[0].toUpperCase() + word.substr(1))
    // ,join(' ');
    /////////////////////////////////////

    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}