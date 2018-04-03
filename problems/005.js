module.exports = () => {
	for (let i = 1; ; i += 1) {
		let isDivisible = true;
		for (let j = 1; j < 21; j += 1) {
			isDivisible = isDivisible && (i % j === 0);
		}
		if (isDivisible) {
			return console.log(`Problem 5 solution is: ${i}`);
		}
	}
};
