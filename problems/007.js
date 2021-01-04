module.exports = () => {
	let count = 0;
	for (let i = 1; ; i += 1) {
		if (isPrime(i)) {
			count += 1;
		}
		if (count === 10_001) {
			return console.log(`Problem 7 solution is: ${i}`);
		}
	}
};

function isPrime(number) {
	for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
		if (number % i === 0) {
			return false;
		}
	}
	return number !== 1;
}
