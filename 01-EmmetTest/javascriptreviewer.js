// As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.
// Can you try thinking of how you could implement a function like that using pseudocode?

// We need to perform an operation only on the even numbers.
// We need to transform those numbers by multiplying them by 3.
// Finally, we need to add the result up from the previous transformation.
function sumOfTripledArray(array){
  let sum = 0;
  for(i = 0; i < array.length;i++){
    if((array[i]%2) == 0){
      //array[i] = array[i] * 3;
      sum = sum + array[i] * 3;
    }
  }
  return sum;
}
let arr = [1,2,3,4,5,6];
let sum = sumOfTripledArray(arr);
console.log(arr);
console.log(sum);
//console.log("---------------")
const filteredArr = arr.filter((num) => num % 2 == 0);
//console.log(filteredArr);
console.log(arr);
//filter
function sumTripledArr(array){
  return array.filter((num) => num % 2 == 0).map((num) => num * 3).reduce((total, currentNum) => {
    total + currentNum
  });
  // array = array.filter((num) => num % 2 == 0);
  // array = array.map((num) => num * 3);
  // return array.reduce((total, currentNumber) => {
  //   return total + currentNumber;
  // });
}
sum = sumOfTripledArray(arr);


console.log('------------------------\n' + sum + '-------------------------\n')
function sumOfTripledEvens(array) {
  return array
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((acc, curr) => acc + curr);
}

sum = sumOfTripledEvens(arr);
console.log(sum);













































// const isEven = arr.filter((num) => num % 2 == 0);
// console.log(isEven);
// const tripleEven = isEven.map((num) => num * 3);
// console.log(tripleEven);
// const accumulateTripledEven = tripleEven.reduce((total, currentNumber) => {
//   return total + currentNumber;
// });
// console.log("This is the three methods result: " + accumulateTripledEven);
// //map


// //reduce