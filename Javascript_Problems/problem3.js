/* Problem 3:
 * The prime factors of 13195 are 5, 7, 13, 29.
 * What is the largest prime factor of the number 600851475143?
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
	var factor = number - 1;
	while (factor > 1) {
		if (number % factor === 0 && isPrime(factor)) {
			return factor;
		}
		factor--;
	}
	return number;
}

var num = 60085147;

var start = new Date().getTime();
print('Answer: ' + findMaxPrime(num));
var end = new Date().getTime();
print('Runtime: ' + (end - start) + 'ms');