const cache = new Map();
const problem161 = () => {
	const [W, H] = [9, 12];
	return `Problem 161 solution is: ${f(0, Array.from({ length: W * H }, () => -1), W, H)}`;
};

const piece = [
	[[0, 0], [1, 0], [0, 1]],
	[[0, 0], [1, 0], [1, 1]],
	[[0, 0], [0, 1], [1, 1]],
	[[0, 0], [0, 1], [-1, 1]],
	[[0, 0], [0, 1], [0, 2]],
	[[0, 0], [1, 0], [2, 0]],
];

function f(n, grid, W, H) {
	const r = Math.floor(n / W);
	const c = n % W;
	if (c === 0 && r === H) return 1;
	const key = `${n} ${JSON.stringify(grid.slice(n, n + 2 * W))}`;
	if (cache.has(key)) return cache.get(key);
	if (grid[n] > 0) {
		cache.set(key, f(n + 1, grid, W, H));
		return cache.get(key);
	}

	let total = 0n;
	for (const p of piece) {
		let found = false;
		for (const [x, y] of p) {
			if ((c + x < 0) || (c + x >= W) || (r + y >= H) || (grid[(r + y) * W + (c + x)] > 0)) {
				found = true;
				break;
			}
		}

		if (!found) {
			const g = [...grid];
			for (const [xx, yy] of p) g[(r + yy) * W + (c + xx)] = 1;
			total += BigInt(f(n + 1, g, W, H));
		}
	}

	cache.set(key, total);
	return cache.get(key);
}

export default problem161;
