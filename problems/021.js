module.exports = () => {
	let sum = 0;
	for (let i = 0; i < 10000; i += 1) {
		const b = d(i);
		if (d(i) !== i && d(b) === i) {
			sum += i;
		}
	}
	return console.log(`Problem 21 solution is: ${sum}`);
};

function d(n) {
	let sum = 0;
	for (let i = 0; i < n; i += 1) {
		if (n % i === 0) {
			sum += i;
		}
	}
	return sum;
}
