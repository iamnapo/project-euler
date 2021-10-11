const graph = [
	[0, 0, 0, 427, 668, 495, 377, 678, 0, 177, 0, 0, 870, 0, 869, 624, 300, 609, 131, 0, 251, 0, 0, 0, 856, 221, 514, 0, 591, 762, 182, 56, 0, 884, 412, 273, 636, 0, 0, 774],
	[0, 0, 262, 0, 0, 508, 472, 799, 0, 956, 578, 363, 940, 143, 0, 162, 122, 910, 0, 729, 802, 941, 922, 573, 531, 539, 667, 607, 0, 920, 0, 0, 315, 649, 937, 0, 185, 102, 636, 289],
	[0, 262, 0, 0, 926, 0, 958, 158, 647, 47, 621, 264, 81, 0, 402, 813, 649, 386, 252, 391, 264, 637, 349, 0, 0, 0, 108, 0, 727, 225, 578, 699, 0, 898, 294, 0, 575, 168, 432, 833],
	[427, 0, 0, 0, 366, 0, 0, 635, 0, 32, 962, 468, 893, 854, 718, 427, 448, 916, 258, 0, 760, 909, 529, 311, 404, 0, 0, 588, 680, 875, 0, 615, 0, 409, 758, 221, 0, 0, 76, 257],
	[668, 0, 926, 366, 0, 0, 0, 250, 268, 0, 503, 944, 0, 677, 0, 727, 793, 457, 981, 191, 0, 0, 0, 351, 969, 925, 987, 328, 282, 589, 0, 873, 477, 0, 0, 19, 450, 0, 0, 0],
	[495, 508, 0, 0, 0, 0, 0, 765, 711, 819, 305, 302, 926, 0, 0, 582, 0, 861, 0, 683, 293, 0, 0, 66, 0, 27, 0, 0, 290, 0, 786, 0, 554, 817, 33, 0, 54, 506, 386, 381],
	[377, 472, 958, 0, 0, 0, 0, 0, 0, 120, 42, 0, 134, 219, 457, 639, 538, 374, 0, 0, 0, 966, 0, 0, 0, 0, 0, 449, 120, 797, 358, 232, 550, 0, 305, 997, 662, 744, 686, 239],
	[678, 799, 158, 635, 250, 765, 0, 0, 0, 35, 0, 106, 385, 652, 160, 0, 890, 812, 605, 953, 0, 0, 0, 79, 0, 712, 613, 312, 452, 0, 978, 900, 0, 901, 0, 0, 225, 533, 770, 722],
	[0, 0, 647, 0, 268, 711, 0, 0, 0, 283, 0, 172, 0, 663, 236, 36, 403, 286, 986, 0, 0, 810, 761, 574, 53, 793, 0, 0, 777, 330, 936, 883, 286, 0, 174, 0, 0, 0, 828, 711],
	[177, 956, 47, 32, 0, 819, 120, 35, 283, 0, 50, 0, 565, 36, 767, 684, 344, 489, 565, 0, 0, 103, 810, 463, 733, 665, 494, 644, 863, 25, 385, 0, 342, 470, 0, 0, 0, 730, 582, 468],
	[0, 578, 621, 962, 503, 305, 42, 0, 0, 50, 0, 155, 519, 0, 0, 256, 990, 801, 154, 53, 474, 650, 402, 0, 0, 0, 966, 0, 0, 406, 989, 772, 932, 7, 0, 823, 391, 0, 0, 933],
	[0, 363, 264, 468, 944, 302, 0, 106, 172, 0, 155, 0, 0, 0, 380, 438, 0, 41, 266, 0, 0, 104, 867, 609, 0, 270, 861, 0, 0, 165, 0, 675, 250, 686, 995, 366, 191, 0, 433, 0],
	[870, 940, 81, 893, 0, 926, 134, 385, 0, 565, 519, 0, 0, 313, 851, 0, 0, 0, 248, 220, 0, 826, 359, 829, 0, 234, 198, 145, 409, 68, 359, 0, 814, 218, 186, 0, 0, 929, 203, 0],
	[0, 143, 0, 854, 677, 0, 219, 652, 663, 36, 0, 0, 313, 0, 132, 0, 433, 598, 0, 0, 168, 870, 0, 0, 0, 128, 437, 0, 383, 364, 966, 227, 0, 0, 807, 993, 0, 0, 526, 17],
	[869, 0, 402, 718, 0, 0, 457, 160, 236, 767, 0, 380, 851, 132, 0, 0, 596, 903, 613, 730, 0, 261, 0, 142, 379, 885, 89, 0, 848, 258, 112, 0, 900, 0, 0, 818, 639, 268, 600, 0],
	[624, 162, 813, 427, 727, 582, 639, 0, 36, 684, 256, 438, 0, 0, 0, 0, 539, 379, 664, 561, 542, 0, 999, 585, 0, 0, 321, 398, 0, 0, 950, 68, 193, 0, 697, 0, 390, 588, 848, 0],
	[300, 122, 649, 448, 793, 0, 538, 890, 403, 344, 990, 0, 0, 433, 596, 539, 0, 0, 73, 0, 318, 0, 0, 500, 0, 968, 0, 291, 0, 0, 765, 196, 504, 757, 0, 542, 0, 395, 227, 148],
	[609, 910, 386, 916, 457, 861, 374, 812, 286, 489, 801, 41, 0, 598, 903, 379, 0, 0, 0, 946, 136, 399, 0, 941, 707, 156, 757, 258, 251, 0, 807, 0, 0, 0, 461, 501, 0, 0, 616, 0],
	[131, 0, 252, 258, 981, 0, 0, 605, 986, 565, 154, 266, 248, 0, 613, 664, 73, 0, 0, 686, 0, 0, 575, 627, 817, 282, 0, 698, 398, 222, 0, 649, 0, 0, 0, 0, 0, 654, 0, 0],
	[0, 729, 391, 0, 191, 683, 0, 953, 0, 0, 53, 0, 220, 0, 730, 561, 0, 946, 686, 0, 0, 389, 729, 553, 304, 703, 455, 857, 260, 0, 991, 182, 351, 477, 867, 0, 0, 889, 217, 853],
	[251, 802, 264, 760, 0, 293, 0, 0, 0, 0, 474, 0, 0, 168, 0, 542, 318, 136, 0, 0, 0, 0, 392, 0, 0, 0, 267, 407, 27, 651, 80, 927, 0, 974, 977, 0, 0, 457, 117, 0],
	[0, 941, 637, 909, 0, 0, 966, 0, 810, 103, 650, 104, 826, 870, 261, 0, 0, 399, 0, 389, 0, 0, 0, 202, 0, 0, 0, 0, 867, 140, 403, 962, 785, 0, 511, 0, 1, 0, 707, 0],
	[0, 922, 349, 529, 0, 0, 0, 0, 761, 810, 402, 867, 359, 0, 0, 999, 0, 0, 575, 729, 392, 0, 0, 388, 939, 0, 959, 0, 83, 463, 361, 0, 0, 512, 931, 0, 224, 690, 369, 0],
	[0, 573, 0, 311, 351, 66, 0, 79, 574, 463, 0, 609, 829, 0, 142, 585, 500, 941, 627, 553, 0, 202, 388, 0, 164, 829, 0, 620, 523, 639, 936, 0, 0, 490, 0, 695, 0, 505, 109, 0],
	[856, 531, 0, 404, 969, 0, 0, 0, 53, 733, 0, 0, 0, 0, 379, 0, 0, 707, 817, 304, 0, 0, 939, 164, 0, 0, 616, 716, 728, 0, 889, 349, 0, 963, 150, 447, 0, 292, 586, 264],
	[221, 539, 0, 0, 925, 27, 0, 712, 793, 665, 0, 270, 234, 128, 885, 0, 968, 156, 282, 703, 0, 0, 0, 829, 0, 0, 0, 822, 0, 0, 0, 736, 576, 0, 697, 946, 443, 0, 205, 194],
	[514, 667, 108, 0, 987, 0, 0, 613, 0, 494, 966, 861, 198, 437, 89, 321, 0, 757, 0, 455, 267, 0, 959, 0, 616, 0, 0, 0, 349, 156, 339, 0, 102, 790, 359, 0, 439, 938, 809, 260],
	[0, 607, 0, 588, 328, 0, 449, 312, 0, 644, 0, 0, 145, 0, 0, 398, 291, 258, 698, 857, 407, 0, 0, 620, 716, 822, 0, 0, 293, 486, 943, 0, 779, 0, 6, 880, 116, 775, 0, 947],
	[591, 0, 727, 680, 282, 290, 120, 452, 777, 863, 0, 0, 409, 383, 848, 0, 0, 251, 398, 260, 27, 867, 83, 523, 728, 0, 349, 293, 0, 212, 684, 505, 341, 384, 9, 992, 507, 48, 0, 0],
	[762, 920, 225, 875, 589, 0, 797, 0, 330, 25, 406, 165, 68, 364, 258, 0, 0, 0, 222, 0, 651, 140, 463, 639, 0, 0, 156, 486, 212, 0, 0, 349, 723, 0, 0, 186, 0, 36, 240, 752],
	[182, 0, 578, 0, 0, 786, 358, 978, 936, 385, 989, 0, 359, 966, 112, 950, 765, 807, 0, 991, 80, 403, 361, 936, 889, 0, 339, 943, 684, 0, 0, 965, 302, 676, 725, 0, 327, 134, 0, 147],
	[56, 0, 699, 615, 873, 0, 232, 900, 883, 0, 772, 675, 0, 227, 0, 68, 196, 0, 649, 182, 927, 962, 0, 0, 349, 736, 0, 0, 505, 349, 965, 0, 474, 178, 833, 0, 0, 555, 853, 0],
	[0, 315, 0, 0, 477, 554, 550, 0, 286, 342, 932, 250, 814, 0, 900, 193, 504, 0, 0, 351, 0, 785, 0, 0, 0, 576, 102, 779, 341, 723, 302, 474, 0, 689, 0, 0, 0, 451, 0, 0],
	[884, 649, 898, 409, 0, 817, 0, 901, 0, 470, 7, 686, 218, 0, 0, 0, 757, 0, 0, 477, 974, 0, 512, 490, 963, 0, 790, 0, 384, 0, 676, 178, 689, 0, 245, 596, 445, 0, 0, 343],
	[412, 937, 294, 758, 0, 33, 305, 0, 174, 0, 0, 995, 186, 807, 0, 697, 0, 461, 0, 867, 977, 511, 931, 0, 150, 697, 359, 6, 9, 0, 725, 833, 0, 245, 0, 949, 0, 270, 0, 112],
	[273, 0, 0, 221, 19, 0, 997, 0, 0, 0, 823, 366, 0, 993, 818, 0, 542, 501, 0, 0, 0, 0, 0, 695, 447, 946, 0, 880, 992, 186, 0, 0, 0, 596, 949, 0, 91, 0, 768, 273],
	[636, 185, 575, 0, 450, 54, 662, 225, 0, 0, 391, 191, 0, 0, 639, 390, 0, 0, 0, 0, 0, 1, 224, 0, 0, 443, 439, 116, 507, 0, 327, 0, 0, 445, 0, 91, 0, 248, 0, 344],
	[0, 102, 168, 0, 0, 506, 744, 533, 0, 730, 0, 0, 929, 0, 268, 588, 395, 0, 654, 889, 457, 0, 690, 505, 292, 0, 938, 775, 48, 36, 134, 555, 451, 0, 270, 0, 248, 0, 371, 680],
	[0, 636, 432, 76, 0, 386, 686, 770, 828, 582, 0, 433, 203, 526, 600, 848, 227, 616, 0, 217, 117, 707, 369, 109, 586, 205, 809, 0, 0, 240, 0, 853, 0, 0, 0, 768, 0, 371, 0, 540],
	[774, 289, 833, 257, 0, 381, 239, 722, 711, 468, 933, 0, 0, 17, 0, 0, 148, 0, 0, 853, 0, 0, 0, 0, 264, 194, 260, 947, 0, 752, 147, 0, 0, 343, 112, 273, 344, 680, 540, 0],
];

export default () => {
	const V = graph.length;
	let vertex = 0;
	const MST = [];
	const edges = [];
	const visited = [];
	let minEdge = [null, null, Number.POSITIVE_INFINITY];
	while (MST.length !== V - 1) {
		visited.push(vertex);
		for (let r = 0; r < V; r += 1) {
			if (graph[vertex][r] !== 0) {
				edges.push([vertex, r, graph[vertex][r]]);
			}
		}

		for (const element of edges) {
			if (element[2] < minEdge[2] && !visited.includes(element[1])) {
				minEdge = element;
			}
		}

		edges.splice(edges.indexOf(minEdge), 1);
		MST.push(minEdge);
		[, vertex] = minEdge;
		minEdge = [null, null, Number.POSITIVE_INFINITY];
	}

	return `Problem 107 solution is: ${(graph.flat().reduce((a, b) => a + b, 0) / 2) - MST.map((el) => el[2]).reduce((a, b) => a + b, 0)}`;
};
