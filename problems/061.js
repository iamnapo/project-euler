const solution = new Array(6).fill(0);
const numbers = new Array(6);

module.exports = () => {
	for (let i = 0; i < 6; i += 1) {
		numbers[i] = generateNumbers(i);
	}

	for (let i = 0; i < numbers[5].length; i += 1) {
		solution[5] = numbers[5][i];
		if (findNext(5, 1)) {
			break;
		}
	}
	return console.log(`Problem 61 solution is: ${solution.reduce((a, b) => a + b)}`);
};

function generateNumbers(type) {
	const newNumbers = [];
	let n = 0;
	let number = 0;
	while (number < 10_000) {
		n += 1;
		switch (type) {
			case 0:
				number = (n * (n + 1)) / 2;
				break;
			case 1:
				number = n * n;
				break;
			case 2:
				number = (n * ((3 * n) - 1)) / 2;
				break;
			case 3:
				number = n * ((2 * n) - 1);
				break;
			case 4:
				number = (n * ((5 * n) - 3)) / 2;
				break;
			case 5:
				number = n * ((3 * n) - 2);
				break;
			default:
				break;
		}
		if (number > 999) {
			newNumbers.push(number);
		}
	}
	return newNumbers;
}

function findNext(last, length) {
	for (let i = 0; i < solution.length; i += 1) {
		if (solution[i] === 0) {
			for (let j = 0; j < numbers[i].length; j += 1) {
				let unique = true;
				for (const element of solution) {
					if (numbers[i][j] === element) {
						unique = false;
						break;
					}
				}
				if (unique && (Math.trunc(numbers[i][j] / 100) === (solution[last] % 100))) {
					solution[i] = numbers[i][j];
					if ((length === 5 && Math.trunc(solution[5] / 100) === solution[i] % 100) || findNext(i, length + 1)) {
						return true;
					}
				}
			}
			solution[i] = 0;
		}
	}
	return false;
}
