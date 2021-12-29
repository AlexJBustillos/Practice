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

function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach((char) => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })

    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }

    return maxChar
}

function fizzbuzz(array) {
    for(i = 0; i < array.length; i++){
      if (array[i] % 3 === 0 && array[i] % 5 === 0){
        console.log(array[i], 'Fizzbutts')
      } else if (array[i] % 5 === 0){
        console.log(array[i],'butts')
      } else if (array[i] % 3 === 0 ){
        console.log(array[i], 'Fizz')
      } else {
        console.log(array[i])
      }
    }
  }

  //----------------API Practice ------------------
  const movieArray = arr => {
    console.log(arr)
    arr.forEach((movie) => {
      // create container element
      let containerDiv = document.createElement("DIV")
      containerDiv.setAttribute('id', 'container')
      // create h1 element
      let movieTitle = document.createElement("H1")
      movieTitle.setAttribute('id', 'title')
      // add title string
      movieTitle.innerHTML = movie.title
      // create image tag
      let movieImg = document.createElement("IMG")
      movieImg.setAttribute('id', 'mmg')
      // add the image string
      movieImg.src = movie.image
      // create a tag
      let movieLink = document.createElement("A")
      // add link string
      // movieLink.innerHTML(movie.link)
      // append to body
      
      containerDiv.append(movieTitle)
      containerDiv.append(movieImg)
      containerDiv.append(movieLink)
      document.body.append(containerDiv)
    })
  }
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
   let movies;
  
  fetch('https://imdb-api.com/en/API/SearchMovie/k_koy9ix43/inception 2010', requestOptions)
    .then(response => response.json())
    .then(result => {
      movies = result.results
      movieArray(movies)
      // call function(movies)
    })
    .catch(error => console.log('error', error));