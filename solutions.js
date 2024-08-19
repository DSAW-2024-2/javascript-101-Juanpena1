// Sum of Two Numbers
function sum(a, b) {
  if(typeof a==="number" & typeof b === "number")
      return a+b;
    else{
      console.log("Los datos de entrada no son adecuados")
    }


}

// Factorial of a Number
function factorial(n) {
  if(typeof n!== "number")
    console.log("Los datos de entrada no son adecuados") 
    return;
  if(n===0){
    return 1;
  }
    
  else{
    return n*factorial(n-1);
  }
      
}

// Find the Largest Number
function findLargest(arr) {
  let largest = -Infinity;
    for (let number of arr) {
        if (typeof number !== "number") {
            console.log("Los datos de entrada no son adecuados");
        } else {
            if (number > largest) {
                largest = number;
            }
        }
    }
    return largest;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== 'string') {
    return "Los datos de entrada no son adecuados";
  }

  const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let cont = 0;

    
    for (let i = 0; i < str.length; i++) {
        let caracter = str[i];
        if (vocales.indexOf(caracter) !== -1) {
            cont++;
        }
    }

    return cont;
}

// Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    return false; 
}
if (n === 2) {
    return true;
}
if (n % 2 === 0) {
    return false; 
}


for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
        return false; 
    }
}

return true; 
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
