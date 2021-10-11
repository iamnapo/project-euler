export default () => {
	const limit = 30_000;
	const count = Array.from({ length: limit + 1 }, () => 0);
	for (let z = 1; cubes(z, z, z, 1) <= limit; z += 1) {
		for (let y = z; cubes(z, y, z, 1) <= limit; y += 1) {
			for (let x = y; cubes(z, y, x, 1) <= limit; x += 1) {
				for (let n = 1; cubes(z, y, x, n) <= limit; n += 1) {
					count[cubes(z, y, x, n)] += 1;
				}
			}
		}
	}

	return `Problem 126 solution is: ${count.indexOf(1000)}`;
};

function cubes(x, y, z, n) {
	return (2 * ((x * y) + (y * z) + (x * z))) + (4 * (x + y + z + n - 2) * (n - 1));
}
