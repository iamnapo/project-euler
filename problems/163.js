module.exports = () => console.log(`Problem 163 solution is: ${T(36)}`);

function T60(n) {
	let t = 0;
	t += Math.trunc((n * (n + 2) * (2 * n + 1)) / 8);
	t += 2 * Math.trunc(((n ** 3) - n / 3) / 2);
	return t;
}

function T90(n) {
	let t = 0;
	t += 6 * Math.trunc((n * (n + 1) * (n + 2)) / 6);
	t += 6 * Math.trunc((2 * (n ** 3) + 5 * (n ** 2) + 2 * n) / 8);
	t += 6 * Math.trunc((2 * (n ** 3) + 3 * (n ** 2) - 3 * n) / 18);
	t += 6 * Math.trunc((2 * (n ** 3) + 3 * (n ** 2) - 3 * n) / 10);
	return t;
}

function T120(n) {
	const t = 3 * Math.trunc((22 * (n ** 3) + 45 * (n ** 2) - 4 * n) / 48);
	return t;
}

function T(n) {
	// Torsten Sillke, 1999
	return T60(n) + T90(n) + T120(n);
}
