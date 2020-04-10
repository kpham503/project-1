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


  function arrMax(arr) {
      var arrMax = arr[0];
      arr.forEach(x => {
          if (x > arrMax) {
              arrMax = x;
          }
      });
      return arrMax;
  }

//Req. 3-D

let sumEvens = (arrays) => {
  var sum = 0;
    for(var x of arrays){
        if(x%2==0){
            sum=sum+x;
        }
    }
    return sum;
};
