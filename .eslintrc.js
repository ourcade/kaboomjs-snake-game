module.exports = {
	root: true,
	parserOptions: { 
		ecmaVersion: 6,
		sourceType: 'module'
	},
	globals: {
		kaboom: true
	},
	env: {
		es6: true,
		browser: true
	},
    extends: [
		'eslint:recommended'
	],
	ignorePatterns: ['src/global.d.ts'],
	parser: "babel-eslint",
	rules: {}
}
