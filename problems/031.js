export default () => {
	const TARGET = 200;
	let ways = 0;
	for (let a = TARGET; a > -1; a -= 200) {
		for (let b = a; b > -1; b -= 100) {
			for (let c = b; c > -1; c -= 50) {
				for (let d = c; d > -1; d -= 20) {
					for (let e = d; e > -1; e -= 10) {
						for (let f = e; f > -1; f -= 5) {
							for (let g = f; g > -1; g -= 2) {
								ways += 1;
							}
						}
					}
				}
			}
		}
	}

	return `Problem 31 solution is: ${ways}`;
};
