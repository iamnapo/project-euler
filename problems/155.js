export default () => {
	const n = 18;
	const sets = [[], [[60, 1]]];
	const setsFract = new Set(["60|1"]);

	function addFract(x, y, i) {
		const z = gcd(x, y);
		const fract = `${x / z}|${y / z}`;
		if (setsFract.has(fract)) return;
		setsFract.add(fract);
		sets[i].push([x / z, y / z]);
	}

	for (let i = 2; i <= n; i += 1) {
		sets[i] = [];
		for (let j = 1; j + j <= i; j += 1) {
			const k = i - j;
			for (let kk = 0; kk < sets[k].length; kk += 1) {
				for (let jj = 0; jj < sets[j].length; jj += 1) {
					const [a, b] = sets[k][kk];
					const [c, d] = sets[j][jj];
					addFract(a * d + b * c, b * d, i);
					addFract(a * c, a * d + b * c, i);
				}
			}
		}
	}
	return `Problem 155 solution is: ${setsFract.size}`;
};

function gcd(a, b) {
	let [x, y] = a > b ? [a, b] : [b, a];
	while (x % y !== 0) [x, y] = [y, x % y];
	return y;
}
