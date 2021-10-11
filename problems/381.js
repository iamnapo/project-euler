export default () => {
	const primeList = [];
	for (let i = 2; i < 1e8; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}

	let pcount = 0;
	for (let i = 2; i < primeList.length; i += 1) {
		const s = primeList[i];
		const count = s + ((s - 1) / 2);
		let y = 0;
		for (let k = 1; ; k += 1) {
			if ((k * s + 1) % 8 === 0) {
				y = (k * s + 1) / 8;
				break;
			}
		}

		pcount += (count + y) % s;
	}

	return `Problem 381 solution is: ${pcount}`;
};

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	if (n < 9) return true;
	if (n % 3 === 0) return false;
	let counter = 5;
	while (counter ** 2 <= n) {
		if (n % counter === 0 || n % (counter + 2) === 0) return false;
		counter += 6;
	}

	return true;
}
