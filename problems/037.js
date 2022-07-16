import isPrime from "./common/is-prime.js";

export default () => {
	const sum = [];
	for (let n = 11; sum.length < 11; n += 1) {
		if (isPrime(n)) {
			let goodLeft = true;
			let tmp = n.toString();
			tmp = tmp.slice(1);
			while (tmp !== "") {
				if (!isPrime(Number.parseInt(tmp, 10))) {
					goodLeft = false;
					break;
				}

				tmp = tmp.slice(1);
			}

			if (goodLeft) {
				let goodRight = true;
				tmp = n.toString();
				tmp = tmp.slice(0, -1);
				while (tmp !== "") {
					if (!isPrime(Number.parseInt(tmp, 10))) {
						goodRight = false;
						break;
					}

					tmp = tmp.slice(0, -1);
				}

				if (goodRight) {
					sum.push(n);
				}
			}
		}
	}

	return `Problem 37 solution is: ${sum.reduce((a, b) => a + b)}`;
};

