// jshint esversion: 7

//Req. 3-b
  let arrAvg = (arr) => {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum / arr.length;
  };

  //Req. 3-C

  let arrMax = (arr) => {
    //
  };
  //
  let fruits = ["Apple", "Orange", "Plum"];
  let result = "";
  let maxSoFar = fruits[0].length;

  ///iterate over array ay
  fruits.forEach((elem) => {
    if(elem.length > maxSoFar){
      maxSoFar = elem.length;
    }
  });

  console.log(maxSoFar);
