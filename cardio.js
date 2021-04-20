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