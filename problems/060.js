export default () => {
	const primeList = [];
	for (let i = 1; primeList.length < 1e4; i += 1) {
		if (isPrime(i)) primeList.push(i);
	}
	const queue = [[]];
	let ind = 0;
	for (;;) {
		const y = primeList[ind];
		ind += 1;
		for (let i = 0; i < queue.length; i++) {
			if (queue[i].every((x) => isPrime(`${x}${y}`) && isPrime(`${y}${x}`))) {
				const tmp = [...queue[i], y];
				if (tmp.length > 4/* sure, why not? */) return `Problem 60 solution is: ${tmp.reduce((a, b) => a + b, 0)}`;
				queue.push(tmp);
			}
		}
	}
};

function isPrime(n) {
	if (n <= 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	if (n < 9) return true;
	if (n % 3 === 0) return false;
	let counter = 5;
	while ((counter * counter) <= n) {
		if (n % counter === 0) return false;
		if (n % (counter + 2) === 0) return false;
		counter += 6;
	}
	return true;
}
