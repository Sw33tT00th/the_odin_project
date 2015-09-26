/* Problem 3:
 * The prime factors of 13195 are 5, 7, 13, 29.
 * What is the largest prime factor of the number 600851475143?
*/

/*
	This is a slight variation on RebootJeff's Solution with a bit
	of optimization. It still largely uses the brute force method,
	but instead of checking from the number down it starts at half
	of the number.
	We can do this because if there is at least 1 prime factor that
	isn't the number itself, then there must be at least 2 prime
	factors. Since the lowest prime value possible is 2, that means
	that the largest possible prime factor would be num/2 at most.
	What this means is that it cuts runtime in half, which still isn't
	great on the 6 year old laptop I wrote this on.

	IMPORTANT NOTE: I tested this through a unix terminal. If you want
	to test this in a browser you will need to modify output.
*/

// check to see if a number is prime or not
var isPrime = function (number) {
	var maxVal = Math.ceil(Math.sqrt(number));
	// check if any number less than the square root divides evenly
	// into the number in question.
	for (var i = 2; i < maxVal; i++){
		if (number % i === 0) {
			// if an even division is found the number is not prime.
			return false;
		}
	}
	// if no even division was found the number is prime.
	return true;
}

var findMaxPrime = function (number) {
	if (isPrime(number)) {
		return number;
	}
	var factor = Math.ceil(number / 2);
	while (factor > 1) {
		if (number % factor === 0 && isPrime(factor)) {
			return factor;
		}
		factor--;
	}
	return number;
}

var num = 600851475;

var start = new Date().getTime();
print('Answer: ' + findMaxPrime(num));
var end = new Date().getTime();
print('Runtime: ' + (end - start) + 'ms');