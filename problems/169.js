module.exports = () => console.log(`Problem 169 solution is: ${f(10n ** 25n)}`);

const cache = new Map();
function f(n) {
	if (cache.has(n)) return cache.get(n);
	if (n === 0n) {
		cache.set(n, 1n);
	} else if (n % 2n) {
		cache.set(n, f(n / 2n));
	} else {
		cache.set(n, f(n / 2n) + f(n / 2n - 1n));
	}
	return cache.get(n);
}
