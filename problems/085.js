const problem085 = () => {
	let error = Number.MAX_SAFE_INTEGER;
	let closestArea = 0;
	const target = 2e06;
	let x = 2000;
	let y = 1;
	while (x >= y) {
		const rects = (x * (x + 1) * y * (y + 1)) / 4;
		if (error > Math.abs(rects - target)) {
			closestArea = x * y;
			error = Math.abs(rects - target);
		}

		if (rects > target) {
			x -= 1;
		} else {
			y += 1;
		}
	}

	return `Problem 85 solution is: ${closestArea}`;
};

export default problem085;
