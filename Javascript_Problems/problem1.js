/* Problem:
 * If we list all the natural numbers below 10 that are multiples of 3 and 5 we get 3, 5, 6, and 9.
 * The sum of these mutiples is 23.
 * Find the sum of all multiples of 3 and 5 below 1000.
 */

//NOTE: testing this script was done in a unix terminal, thus the print statement at the bottom.
//		If this were run in a browser it would probably need to be console.log(sum);

// define a sum value to store the total, initilize it at 0
var sum = 0;
// iterate over every number from 1 to 1000 (non inclusive)
for (var i = 1; i < 1000; i++) {
	// if there is no remainder after dividing the current value
	// by 3 or by 5, add the value to the sum.
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}

// result: 233186
print(sum);