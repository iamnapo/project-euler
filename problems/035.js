import isPrime from "./common/is-prime.js";

export default () => {
	let count = 0;
	for (let n = 2; n < 1e06; n += 1) {
		if (isPrime(n)) {
			let tmp = n.toString();
			tmp = Number.parseInt(tmp.at(-1) + tmp.slice(0, -1), 10);
			let allGood = true;
			while (tmp !== n) {
				if (!isPrime(tmp)) {
					allGood = false;
					break;
				}

				tmp = tmp.toString();
				tmp = Number.parseInt(tmp.at(-1) + tmp.slice(0, -1), 10);
			}

			if (allGood) {
				count += 1;
			}
		}
	}

	return `Problem 35 solution is: ${count}`;
};

