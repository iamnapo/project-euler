import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = [
	...eslintConfigIamnapo.configs.default.map((cfg) => ({
		...cfg,
		files: [eslintConfigIamnapo.filePatterns.default],
	})),
	{
		rules: {
			"@stylistic/max-len": "off",
			"no-bitwise": "off",
		},
	},
];

export default config;
