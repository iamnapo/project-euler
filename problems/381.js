import getPrimesLessThan from "./common/get-primes-less-than.js";

const problem381 = () => {
	const primeList = getPrimesLessThan(1e8);

	let pcount = 0;
	for (let i = 2; i < primeList.length; i += 1) {
		const s = primeList[i];
		const count = s + ((s - 1) / 2);
		let y = 0;
		for (let k = 1; ; k += 1) {
			if ((k * s + 1) % 8 === 0) {
				y = (k * s + 1) / 8;
				break;
			}
		}

		pcount += (count + y) % s;
	}

	return `Problem 381 solution is: ${pcount}`;
};

export default problem381;
