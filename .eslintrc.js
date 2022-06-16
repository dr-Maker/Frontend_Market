module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"react/prop-types": "off",
		// "linebreak-style": [
		// 	"error",
		// 	"windows"
		// ],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		], 
		"linebreak-style": 0
	}
};
