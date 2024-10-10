import eslintConfigIamnapo from "eslint-config-iamnapo"; // eslint-disable-line import/no-extraneous-dependencies

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
