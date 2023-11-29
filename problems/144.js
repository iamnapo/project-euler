const problem144 = () => {
	let result = 0;

	let xA = 0;
	let yA = 10.1;

	let xO = 1.4;
	let yO = -9.6;

	while (xO > 0.01 || xO < -0.01 || yO < 0) {
		const slopeA = (yO - yA) / (xO - xA);
		const slopeO = -4 * (xO / yO);
		const tanA = (slopeA - slopeO) / (1 + (slopeA * slopeO));
		const slopeB = (slopeO - tanA) / (1 + (tanA * slopeO));
		const interceptB = yO - (slopeB * xO);
		const a = 4 + (slopeB * slopeB);
		const b = 2 * (slopeB * interceptB);
		const c = (interceptB * interceptB) - 100;
		const ans1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
		const ans2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
		xA = xO;
		yA = yO;
		xO = (Math.abs(ans1 - xO) > Math.abs(ans2 - xO)) ? ans1 : ans2;
		yO = (slopeB * xO) + interceptB;
		result += 1;
	}

	return `Problem 144 solution is: ${result}`;
};

export default problem144;
