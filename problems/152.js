import isPrime from "./common/is-prime.js";

export default () => {
	let count = 0;
	const array = Array.from({ length: 79 }, (_, ind) => ind + 2).filter((el) => primeFactors(el).every((factor) => [2, 3, 5, 7, 13].includes(factor)));
	const lcm = lcmOfMany(array.map((el) => el ** 2));
	const invSquare = array.map((el) => lcm / el / el);
	const sum1 = [];
	const sum2 = [];
	for (const subset of subsets(invSquare.slice(0, invSquare.length / 2))) sum1.push(lcm / 2 - subset.reduce((a, b) => a + b, 0));
	for (const subset of subsets(invSquare.slice(invSquare.length / 2))) sum2.push(subset.reduce((a, b) => a + b, 0));
	const y1 = new Map();
	const y2 = new Map();
	for (const el of sum1) y1.set(el, (y1.get(el) || 0) + 1);
	for (const el of sum2) y2.set(el, (y2.get(el) || 0) + 1);
	const tmp = new Set(y2.keys());
	const commonKeys = [...new Set(y1.keys())].filter((x) => tmp.has(x));
	for (const key of commonKeys) count += (y1.get(key) * y2.get(key));
	return `Problem 152 solution is: ${count}`;
};

function* subsets(array, offset = 0) {
	while (offset < array.length) {
		const first = array[offset];
		offset += 1;
		for (const subset of subsets(array, offset)) {
			subset.push(first);
			yield subset;
		}
	}

	yield [];
}

function primeFactors(num) {
	const arr = [];
	for (let i = 2; i < num; i += 1) {
		if (num % i === 0 && isPrime(i)) arr.push(i);
	}

	return arr.length > 0 ? arr : [num];
}

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) {
		[x, y] = [y, x % y];
	}

	return y;
}

function lcmOfTwo(a, b) {
	return Math.abs(a * b) / gcd(a, b);
}

function lcmOfMany(arr) {
	let n = 1;
	for (let i = 0; i < arr.length; i += 1) n = lcmOfTwo(arr[i], n);
	return n;
}
