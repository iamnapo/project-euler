export default () => {
	const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let sum = 0;
	for (let sub17 = 17; sub17 < 1000; sub17 += 17) {
		for (let sub13 = 13; sub13 < 1000; sub13 += 13) {
			if (sub13.toString().padStart(3, 0).slice(1) === sub17.toString().padStart(3, 0).slice(0, 2)) {
				for (let sub11 = 11; sub11 < 1000; sub11 += 11) {
					if (sub11.toString().padStart(3, 0).slice(1) === sub13.toString().padStart(3, 0).slice(0, 2)) {
						for (let sub7 = 7; sub7 < 1000; sub7 += 7) {
							if (sub7.toString().padStart(3, 0).slice(1) === sub11.toString().padStart(3, 0).slice(0, 2)) {
								for (let sub5 = 5; sub5 < 1000; sub5 += 5) {
									if (sub5.toString().padStart(3, 0).slice(1) === sub7.toString().padStart(3, 0).slice(0, 2)) {
										for (let sub3 = 3; sub3 < 1000; sub3 += 3) {
											if (sub3.toString().padStart(3, 0).slice(1) === sub5.toString().padStart(3, 0).slice(0, 2)) {
												for (let sub2 = 2; sub2 < 1000; sub2 += 2) {
													if (sub2.toString().padStart(3, 0).slice(1) === sub3.toString().padStart(3, 0).slice(0, 2)) {
														const tmp = sub2.toString().padStart(3, 0) + sub7.toString().padStart(3, 0) + sub17.toString().padStart(3, 0);
														for (const d of digits) {
															if (!tmp.includes(d)) {
																let tmp2 = [];
																tmp2 = d + tmp;
																if (isPandigital(tmp2)) {
																	sum += Number.parseInt(tmp2, 10);
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}

	return `Problem 43 solution is: ${sum}`;
};

function isPandigital(n) {
	const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	for (const d of digits) {
		if (!n.includes(d)) {
			return false;
		}
	}

	return n.length === 10;
}
