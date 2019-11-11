class Radical {
	constructor(rad, number) {
		this.rad = rad;
		this.number = number;
	}
}

module.exports = () => {
	let result = 0;
	const limit = 120000;
	const radicals = new Array(limit + 1);
	for (let i = 0; i < radicals.length; i += 1) {
		radicals[i] = new Radical(1, i);
	}

	for (let i = 2; i <= limit; i += 1) {
		if (radicals[i].rad === 1) {
			radicals[i].rad = i;
			for (let j = i + i; j < limit; j += i) {
				radicals[j].rad *= i;
			}
		}
	}

	const sortedRadicals = radicals.slice();
	sortedRadicals.shift();
	sortedRadicals.sort((a, b) => {
		if (a.rad > b.rad) {
			return 1;
		}
		if (a.rad < b.rad) {
			return -1;
		}
		return a.number > b.number ? 1 : -1;
	});

	for (let c = 3; c <= limit; c += 1) {
		const radc = radicals[c].rad;
		const chalf = c / 2;
		for (const a of sortedRadicals) {
			if (a.rad * radicals[c].rad > chalf) {
				break;
			}
			if (a.number < chalf) {
				const b = c - a.number;
				if (a.rad * radicals[b].rad * radc < c && gcd(a.rad, radicals[b].rad) === 1) {
					result += c;
				}
			}
		}
	}
	return console.log(`Problem 127 solution is: ${result}`);
};

function gcd(a, b) {
	let x;
	let y;
	[x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}
	return y;
}
