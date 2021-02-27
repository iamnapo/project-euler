export default () => {
	const grid = generateGrid();
	const n = grid[0].length;
	let ans = 0;
	for (let i = 0; i < n; i += 1) {
		ans = Math.max(ans, maxSubSum(grid, i, 0, 0, 1));
		ans = Math.max(ans, maxSubSum(grid, 0, i, 1, 0));
		ans = Math.max(ans, maxSubSum(grid, i, 0, 1, -1));
		ans = Math.max(ans, maxSubSum(grid, i, 0, -1, 1));
	}
	return `Problem 149 solution is: ${ans}`;
};

function generateGrid() {
	const s = [0];
	for (let k = 1; k < 56; k += 1) {
		s.push(((100_003 - (200_003 * k) + (300_007 * (k ** 3))) % 1_000_000) - 500_000);
	}
	for (let k = 56; k < 4_000_001; k += 1) {
		s.push(((s[k - 24] + s[k - 55] + 1_000_000) % 1_000_000) - 500_000);
	}
	const res = [];
	for (let i = 0; i < 2000; i += 1) {
		const tmp = [];
		for (let j = 0; j < 2000; j += 1) {
			tmp.push(s[(i * 2000) + j + 1]);
		}
		res.push(tmp);
	}
	return res;
}

function maxSubSum(grid, x, y, dx, dy) {
	const n = grid[0].length;
	let [ans, cur] = [0, 0];
	while (
		x < n
    && x >= 0
    && y < n
    && y >= 0
	) {
		cur = Math.max(0, cur + grid[x][y]);
		ans = Math.max(ans, cur);
		x += dx;
		y += dy;
	}
	return ans;
}
