import { defineConfig } from "eslint/config";
import eslintConfigIamnapo from "eslint-config-iamnapo";

const config = defineConfig([
	{
		files: [eslintConfigIamnapo.filePatterns.default],
		extends: [eslintConfigIamnapo.configs.default],
		rules: {
			"@stylistic/max-len": "off",
		},
	},
]);

export default config;
