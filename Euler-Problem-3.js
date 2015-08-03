//********** PROBLEM 3 **********
//Largest prime factor

//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

function findFactors(number) {
    factors = [];
    for (x = 2; x < number; x++){
        if (number % x === 0){
            if (isPrime(x)) {
                factors.push(x);
            }
        }
    }
    return factors;
}

function isPrime(number){
    counter = 0;
    for (i=2; i < (number-1); i++){
        if (number % i === 0){
            counter += 1;
        }
    }
    if (counter !== 0) {
        return false;
    }
    else {
        return true;
    }
}
console.log(findFactors(600851475143));
