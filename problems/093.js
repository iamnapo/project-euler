export default () => {
	const list = [];
	let [a, b, c, d, r] = [0, 0, 0, 0, 0];
	for (a = 1; a < 10; a += 1) {
		for (b = a + 1; b < 10; b += 1) {
			for (c = b + 1; c < 10; c += 1) {
				for (d = c + 1; d < 10; d += 1) {
					r = testLen(a, b, c, d);
					list[r] = list[r] || [];
					list[r].push(`${a}${b}${c}${d}`);
				}
			}
		}
	}
	return `Problem 93 solution is: ${list.pop()}`;
};

function testLen(...a) {
	const r = [];
	let s = [];
	let [i0, i1, i2, i3, o1, o2, o3, p] = Array.from({ length: 8 }, () => 0);
	const calc = (o) => {
		const aa = s.pop();
		const l = s.length - 1;
		if (o) {
			if (o > 1) {
				if (o > 2) {
					s[l] /= aa;
				} else {
					s[l] *= aa;
				}
			} else {
				s[l] -= aa;
			}
		} else {
			s[l] += aa;
		}
		return s[l];
	};
	const ck = () => {
		const x = calc(o3);
		if (x > 0 && Math.floor(x) === x) {
			r[x] = x;
		}
	};
	for (i0 = 0; i0 < 4; i0 += 1) {
		for (i1 = 0; i1 < 4; i1 += 1) {
			if (i1 !== i0) {
				for (i2 = 0; i2 < 4; i2 += 1) {
					if (i2 !== i1 && i2 !== i0) {
						i3 = 6 - i2 - i1 - i0;
						for (o1 = 0; o1 < 4; o1 += 1) {
							for (o2 = 0; o2 < 4; o2 += 1) {
								for (o3 = 0; o3 < 4; o3 += 1) {
									s = [a[i0], a[i1]];
									calc(o1);
									s[1] = a[i2];
									calc(o2);
									s[1] = a[i3];
									ck();
									s = [a[i0], a[i1]];
									calc(o1);
									s[1] = a[i2];
									s[2] = a[i3];
									calc(o2);
									ck();
									s = [a[i0], a[i1]];
									calc(o1);
									calc(o2);
									s[1] = a[i2];
									s[2] = a[i3];
									ck();
									s = [a[i0], a[i1], a[i2]];
									calc(o1);
									calc(o2);
									s[1] = a[i3];
									ck();
									s = [a[i0], a[i1], a[i2], a[i3]];
									calc(o1);
									calc(o2);
									ck();
									s = [a[i0], a[i1], a[i2]];
									calc(o1);
									s[1] = a[i3];
									calc(o2);
									ck();
								}
							}
						}
					}
				}
			}
		}
	}
	p = 0;
	r.every((v) => {
		p += 1;
		return v === p;
	});
	return p - 1;
}
