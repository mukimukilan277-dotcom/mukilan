// Prime Number Program in JavaScript

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Function to generate prime numbers up to a given limit
function generatePrimes(limit) {
    let primes = [];
    
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    
    return primes;
}

// Function to find prime numbers in an array
function findPrimesInArray(arr) {
    return arr.filter(num => isPrime(num));
}

// ============================================
// Examples and Testing
// ============================================

// Check if individual numbers are prime
console.log("=== Checking Individual Numbers ===");
console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));
console.log("Is 13 prime?", isPrime(13));
console.log("Is 1 prime?", isPrime(1));
console.log("Is 2 prime?", isPrime(2));

// Generate prime numbers up to a limit
console.log("\n=== Generate Prime Numbers ===");
console.log("Prime numbers up to 20:", generatePrimes(20));
console.log("Prime numbers up to 30:", generatePrimes(30));

// Find primes in an array
console.log("\n=== Find Primes in Array ===");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log("Original array:", numbers);
console.log("Prime numbers in array:", findPrimesInArray(numbers));

