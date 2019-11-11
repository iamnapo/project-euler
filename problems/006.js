module.exports = () => {
	const squareOfSums = ((1 + 100) * 50) ** 2; // Gauss in Elementary school
	return console.log(`Problem 6 solution is: ${squareOfSums - sumOfSquares(100)}`);
};

function sumOfSquares(n) {
	// https://en.wikipedia.org/wiki/Faulhaber%27s_formula
	return ((n ** 3) / 3) + ((n ** 2) / 2) + (n / 6);
}
