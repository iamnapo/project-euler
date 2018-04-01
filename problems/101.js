module.exports = () => {
	let sum = 0;
	const seq = [];
	for (let n = 1; n < 12; n += 1) {
		let val = 0;
		let sign = 1;
		for (let pow = 0; pow < 11; pow += 1) {
			val += sign * (n ** pow);
			sign *= -1;
		}
		seq.push(val);
	}
	for (let k = 1; k < 11; k += 1) {
		let potFit = 0;
		for (let i = 1; i <= k; i += 1) {
			let [num, den] = [1, 1];
			for (let j = 1; j <= k; j += 1) {
				if (i !== j) [num, den] = [num * (k - j + 1), den * (i - j)];
			}
			potFit += seq[i - 1] * num / den;
		}
		if (potFit !== seq[k]) sum += potFit;
	}
	return console.log(`Problem 101 solution is: ${sum}`);
};
