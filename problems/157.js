export default () => {
	let sum = 0;
	for (let n = 1; n < 10; n += 1) {
		let D = divisors(100 ** n);
		D = D.slice(0, Math.trunc(D.length / 2) + 1);
		for (let i = 0; i < D.length; i += 1) sum += divisors(gcd((10 ** n) + D[i], (10 ** n) + (100 ** n) / D[i])).length;
	}

	return `Problem 157 solution is: ${sum}`;
};

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) [x, y] = [y, x % y];
	return y;
}

function divisors(n) {
	const front = [];
	const back = [];
	const sqrt = n ** 0.5; // Euler said that
	for (let i = 1; i <= sqrt; i += 1) {
		if (n % i === 0) {
			front.push(i);
			if (i * i !== n) back.push(n / i);
		}
	}

	back.reverse();
	return [...front, ...back];
}
