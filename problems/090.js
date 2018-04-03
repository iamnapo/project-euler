module.exports = () => {
	let result = 0;
	const combs = allCombination(6, 10);
	for (let i = 0; i < combs.length; i += 1) {
		if (combs[i][0] !== 0) {
			break;
		}
		for (let j = i + 1; j < combs.length; j += 1) {
			if (isValidCombinations(combs[i], combs[j])) {
				result += 1;
			}
		}
	}
	return console.log(`Problem 90 solution is: ${result}`);
};

function allCombination(k, n) {
	const combs = [];
	let comb = [];
	for (let i = 0; i < k; i += 1) {
comb.push(i);
	}
	for (; ;) {
		combs.push(comb);
		comb = comb.slice();
		if (combs[combs.length - 1][k - 1] === 9) {
			combs[combs.length - 1][k - 1] = 6;
		}
		let i = k - 1;
		comb[i] += 1;
		while ((i > 0) && (comb[i] >= (n - k) + 1 + i)) {
			i -= 1;
			comb[i] += 1;
		}
		if (comb[0] > n - k) {
			break;
		}
		for (let j = i + 1; j < k; j += 1) {
			comb[j] = comb[j - 1] + 1;
		}
	}
	return combs;
}

function isValidCombinations(d1, d2) {
	const combs = [[0, 1], [0, 4], [0, 6], [1, 6], [2, 5], [3, 6], [4, 6], [6, 4], [8, 1]];
	let valid = true;
	for (let i = 0; i < combs.length; i += 1) {
		if (!((d1.includes(combs[i][0]) && d2.includes(combs[i][1])) || (d2.includes(combs[i][0]) && d1.includes(combs[i][1])))) {
			valid = false;
			break;
		}
	}
	return valid;
}
