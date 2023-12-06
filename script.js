//print the odd numbers in array
//using annoymous function

var result = [];
var a = function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result.push(arr[i]);
    }
  }
  return result;
}
console.log(a([1,2,3,4,5,6,7]));

//IIFE funtion 

const b= [];
(function (arr){
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        b.push(arr[i]);
    }
  }
  console.log(b)
})([13,45,67,23,78,12,24,])

//Arrow functions 

const result1 = [];
const c =(arr)=>{
  for(var i=0;i<arr.length;i=i+1){
    if(arr[i]%2!==0){
        result1.push(arr[i]); 
    }
  }
  return result1;
}
console.log(c([11,12,13,14,15,165,17,18,20,]))

//sum of all numbers in array
//anonymous function
 var sumresult =0
 var d= function(arr1) {
  for(var j=0;j<arr1.length;j=j+1){
    sumresult+= arr1[j];
 }
 return sumresult;
}
console.log(d([1,2,3,4,,5,6,7,8,]));

// IIFE function

(function sumArray(array) {
  let sum2 = 0;
  for (let num of array) {
    sum2 += num;
  }
  console.log(` The sum of the array is: ${sum2}`);
})([1,2,3,4,5]);


//arrow function

const numbers = [1, 2, 3, 4, 5];
const sum3 = (numbers) => {
  let sum3 = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum3 += numbers[i];
  }
  return sum3;
};
console.log(sum3(numbers)); 

//return all prime numbers in array
 
let arraynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
const primeNumbers = [1, 2, 3, 5, 7, 11,8,9,44,56,77,89 ];
const result4 = primeNumbers.filter(isPrime);
console.log(result);

//IIFE function return all prime numbers

let primes = [];
[3, 7, 11, 13, 17, 19, ].forEach(num => {
 if (isPrime1(num)) {
    primes.push(num);
 }
});

function isPrime1(num) {
 for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      return false;
    }
 }
 return num > 1;
}

const primeArray = (() => {
 return primes;
})();

console.log(primeArray);

//Arrow function using prime numbers
const prime2Numbers = [2, 3, 5, 7];
const isPrime2 = (num) => {
  for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++){
     if(num % i === 0){
      return false;
     } 
  }
  return num > 1;
  }
  
 const getPrimeNumbers = (arr) => {
  return arr.filter(isPrime2);
 }


//!Palindrome
function palindrome(arr){
var result =[];
for(var i=0;i<arr.length;i++){
    var data = arr[i].split("").reverse().join("");
    if(data===arr[i]){
        result.push(arr[i]);
    }
}
     return result;
}
console.log(palindrome(['mom','dad','data']));

//!convert all the string title to caps
function titleCase(arr){
  var res =arr.toString();
  var data = res.toLowerCase().split(" ");
  for(var i=0; i<data.length; i++){
     data[i]= data[i].charAt(0).toUpperCase() + data[i].slice(1);
  }
  return data.join(' ');
}
console.log(titleCase(["tHis IS jAvAsCrIpT"]));

//!Median of two sorted arrays

const arr1 = [1,3,5,7];
const arr2 = [2,4,6];
function findMedianOfTwoSortedArrays(arr1, arr2){
  let arr = [...arr1,...arr2];
  arr.sort((a,b)=>a-b);
  let n = arr.length;
  if(n%2===0){
// (arrayname[length/2]+arrayname[length/2-1])/2
 return((arr[n/2]+arr[n/2-1])/2)
  }
  else{
//arrayname[length/2]
 return arr[Math.floor(n/2)]
  }
}
console.log(findMedianOfTwoSortedArrays(arr1,arr2));

//!Rotate an array by k times:-

const arr = [1,2,3,4,5,];
const k =3;
(function(arr,k){
   for(var i=0;i<k;i++){
    //push
    arr.push(arr[i])
   }
   for(var i=0;i<k;i++){
    //shift
    arr.shift()
   }
   console.log(arr)
})(arr,k);

//! Uber Price:-
class UberPrice{
  constructor(kilometer,price=50){
    this.kilometer = kilometer;
    this.price = price;
  }
  get Price(){
    return this.kilometer*this.price;
  }
}
var uber1 = new UberPrice(5);
var uber2 = new UberPrice(5,125)
console.log(uber1.Price);
console.log(uber2.Price);





















