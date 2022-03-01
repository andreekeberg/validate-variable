module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: ['eslint:recommended'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	rules: {
		indent: 'off',
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: 'off',
		'no-extra-semi': 'off',
		'no-unused-vars': 'off',
		'no-empty': 'off',
		'no-misleading-character-class': 'off',
		'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs']
	}
}
