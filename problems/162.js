const problem162 = () => `Problem 162 solution is: ${f(16n).toString(16).toUpperCase()}`;

function g(n, r) {
	if (r === 0n) return 16n ** n;
	if (n === r) return factorial(r);
	return (16n - r) * g(n - 1n, r) + r * g(n - 1n, r - 1n);
}

function f(n) {
	if (n === 3n) return 4n;
	return f(n - 1n) + 13n * g(n - 1n, 3n) + 2n * g(n - 1n, 2n);
}

function factorial(n) {
	if (n === 0n || n === 1n) return 1n;
	return n * factorial(n - 1n);
}

export default problem162;
