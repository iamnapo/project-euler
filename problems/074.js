export default () => {
	let result = 0;

	for (let i = 1; i <= 1e06; i += 1) {
		let n = i;
		let last = 0;
		let count = 0;
		while (![last, 169, 363_601, 1454, 871, 45_361, 872, 45_362].includes(n)) {
			last = n;
			n = factorialSum(n);
			count += 1;
		}

		if (count === 57 && [169, 363_601, 1454].includes(n)) {
			result += 1;
		}
	}

	return `Problem 74 solution is: ${result}`;
};

function factorialSum(n) {
	const f = [1, 1, 2, 6, 24, 120, 720, 5040, 40_320, 362_880];
	let tmp = n;
	let res = 0;

	while (tmp > 0) {
		res += f[tmp % 10];
		tmp = Math.trunc(tmp / 10);
	}

	return res;
}
