let cPos = 0;
let ccPos = 0;
let chancePos = 0;

const problem084 = () => {
	const board = Array.from({ length: 40 }, () => 0);
	const samples = 1e06;
	let doubles = 0;
	for (let i = 0; i < samples; i += 1) {
		const dice1 = Math.trunc(Math.random() * 4) + 1;
		const dice2 = Math.trunc(Math.random() * 4) + 1;
		doubles = (dice1 === dice2) ? doubles + 1 : 0;
		if (doubles > 2) {
			cPos = 10;
			doubles = 0;
		} else {
			cPos = (cPos + dice1 + dice2) % 40;
			if (cPos === 7 || cPos === 22 || cPos === 36) {
				chance();
			}

			if (cPos === 2 || cPos === 17 || cPos === 33) {
				cc();
			}

			if (cPos === 30) {
				cPos = 10;
			}
		}

		board[cPos] += 1;
	}

	const index = board.map((el, i) => ({ ind: i, val: el })).toSorted((x, y) => {
		if (x.val < y.val) {
			return 1;
		}

		if (x.val === y.val) {
			return 0;
		}

		return -1;
	}).map((el) => el.ind);
	let modalstring = "";
	for (let i = 0; i < 3; i += 1) {
		if (index[i] < 10) {
			modalstring += "0";
		}

		modalstring += index[i].toString();
	}

	return `Problem 84 solution is: ${modalstring}`;
};

function cc() {
	const ccc = [0, 10];
	ccPos += 1;
	ccPos %= 16;
	if (ccPos < 2) {
		cPos = ccc[ccPos];
	}
}

function chance() {
	const chance1 = [0, 10, 11, 24, 39, 5];
	chancePos += 1;
	chancePos %= 16;
	if (chancePos < 6) {
		cPos = chance1[chancePos];
	}

	if (chancePos === 6 || chancePos === 7) {
		if (cPos === 7) {
			cPos = 15;
		}

		if (cPos === 22) {
			cPos = 25;
		}

		if (cPos === 36) {
			cPos = 5;
		}
	}

	if (chancePos === 8) {
		cPos = (cPos === 22) ? 28 : 12;
	}

	if (chancePos === 9) {
		cPos -= 3;
	}
}

export default problem084;
