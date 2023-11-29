const problem145 = () => {
	let count = 0;
	const limit = 1e09;
	for (let i = 1; i < limit; i += 2) {
		if (isReversible(i)) {
			count += 2;
		}
	}

	return `Problem 145 solution is: ${count}`;
};

function isReversible(n) {
	let number = n;
	if (n % 10 === 0) {
		return false;
	}

	let reversed = 0;
	while (number > 0) {
		reversed = (10 * reversed) + (number % 10);
		number = Math.trunc(number / 10);
	}

	reversed += n;
	while (reversed > 0) {
		if ((reversed % 10) % 2 === 0) {
			return false;
		}

		reversed = Math.trunc(reversed / 10);
	}

	return true;
}

export default problem145;
