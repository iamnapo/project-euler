const perm = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default () => {
	let count = 0;
	do {
		count += checkPartitions(0, 0);
	} while (nextPermuation());

	return `Problem 118 solution is: ${count}`;
};

function nextPermuation() {
	const N = perm.length;
	let i = N - 1;
	while (perm[i - 1] >= perm[i]) {
		i -= 1;
		if (i === 0) {
			return false;
		}
	}

	let j = N;
	while (perm[j - 1] <= perm[i - 1]) {
		j -= 1;
	}

	[perm[i - 1], perm[j - 1]] = [perm[j - 1], perm[i - 1]];
	i += 1;
	j = N;
	while (i < j) {
		[perm[i - 1], perm[j - 1]] = [perm[j - 1], perm[i - 1]];
		i += 1;
		j -= 1;
	}

	return true;
}

function checkPartitions(startIndex, prev) {
	let count = 0;
	for (let i = startIndex; i < perm.length; i += 1) {
		let number = 0;
		for (let j = startIndex; j <= i; j += 1) {
			number = (number * 10) + perm[j];
		}

		if (!(number < prev || !isPrime(number))) {
			if (i === (perm.length - 1)) {
				return count + 1;
			}

			count += checkPartitions(i + 1, number);
		}
	}

	return count;
}

function isPrime(n) {
	if (n <= 1) {
		return false;
	}

	if (n === 2) {
		return true;
	}

	if (n % 2 === 0) {
		return false;
	}

	if (n < 9) {
		return true;
	}

	if (n % 3 === 0) {
		return false;
	}

	let counter = 5;
	while ((counter * counter) <= n) {
		if (n % counter === 0) {
			return false;
		}

		if (n % (counter + 2) === 0) {
			return false;
		}

		counter += 6;
	}

	return true;
}
