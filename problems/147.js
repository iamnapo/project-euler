module.exports = () => {
	let count = 0;
	const [M, N] = [47, 43];
	for (let pX = 0; pX < N; pX++) {
		for (let pY = 0; pY < M; pY++) {
			for (let sN = 1; pX + sN <= N; sN++) {
				for (let sM = 1; pY + sM <= M; sM++) {
					count += (N - pX - sN + 1) * (M - pY - sM + 1);
				}
			}
		}
	}
	for (let pX = 0.5; pX < N; pX += 0.5) {
		for (let pY = 0; pY < M; pY += 0.5) {
			if ((pX + pY) % 1 !== 0) {
				continue;
			}
			for (let sN = 0.5; pX + sN <= N; sN += 0.5) {
				for (let sM = 0.5; pX - sM >= 0; sM += 0.5) {
					if (pY + sN + sM > M) {
						break;
					}
					count += (N - Math.round(pX + sN) + 1) * (M - Math.round(pY + sN + sM) + 1);
				}
			}
		}
	}
	return console.log(`Problem 147 solution is: ${count}`);
};
