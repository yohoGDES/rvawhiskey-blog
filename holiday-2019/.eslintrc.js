module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	'extends': [
		'standard',
		'eslint:recommended',
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'space-before-function-paren': ['error', 'never']
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
