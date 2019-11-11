module.exports = () => {
	let passwords = [319, 680, 180, 690, 129, 620, 762, 689, 762, 318, 368, 710, 720, 710, 629, 168, 160, 689, 716, 731, 736, 729, 316, 729, 729, 710, 769, 290, 719, 680, 318, 389, 162, 289, 162, 718, 729, 319, 790, 680, 890, 362, 319, 760, 316, 729, 380, 319, 728, 716];
	passwords = [...new Set(passwords)];
	let found = false;
	for (let i = 100; ; i += 1) {
		found = true;
		for (const attempt of passwords) {
			const [a, b, c] = attempt.toString();
			const tmp = i.toString();
			if (tmp.indexOf(a) < 0 || tmp.indexOf(a) > tmp.indexOf(b) || tmp.indexOf(b) > tmp.indexOf(c)) {
				found = false;
				break;
			}
		}
		if (found) {
			return console.log(`Problem 79 solution is: ${i}`);
		}
	}
};
