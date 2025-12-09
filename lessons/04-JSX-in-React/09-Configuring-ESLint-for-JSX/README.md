Reference: [ESLint – Complete Intro to React](https://react-v9.holt.courses/lessons/tools/linting)

Installation
``` shell
npm install -D eslint@9.9.1 eslint-config-prettier@9.1.0 globals@15.9.0
```

Gotchas
- class vs className
- "for" for "input" label
	``` jsx
	<label htmlFor=""></label>
	```
- self-closing tag
	``` jsx
	<input />
	```
	Even though ``` <input> ``` is valid in JS, it is *not* in JSX

> eslint.config.mjs

> Template
``` js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	prettier,
]
```
> Updated with React config
``` js
import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		...reactPlugin.configs.flat.recommended,
		settings: {
			react: {
				version: "detect",
			},
		},
	},
	reactPlugin.configs.flat["jsx-runtime"],
	{
		files: ["**/*.js", "**/*.jsx"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			"react/no-unescaped-entities": "off",
			"react/prop-types": "off",
		},
	},
	prettier,
];
```
- We use "flat" configs for ESLint, that is where the word "flat" comes from
- import reactPlugin
	``` js
	import reactPlugin from "eslint-plugin-react";
	```
- settings: version
	``` js
	version: "detect"
	```
- reactPlugin configs
	``` js
	reactPlugin.configs.flat["jsx-runtime"]
	```
	This one will fix the error of not importing React
- rules
	``` js
	rules: {
		"react/no-unescaped-entities": "off",
		"react/prop-types": "off"
	}
	```
	"react/no-unescaped-entities" requires you to write "&apos" if you want to use quote (') for your string

> App.jsx
``` jsx
const App = () => {
	return (
		<div>
			<h1>Padre Gino's - Order Now</h1>
			<Pizza name="Pepperoni" description="pep, cheese, n stuff" />
		</div>
	)
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
```
- Upper / lowercase distinguish between a DOM and a React component that you have created
	- Uppercase: ```<Pizza>``` this is a synthetic one that you have created. You have to name these uppercase. This is *not* a convention
	- Lowercase: ```<h1>``` this is expected to be rendered, it is a DOM tag

- Replace ``` root.render(React.createElement(App)); ``` with ``` root.render(<App />); ```

> Browser
![[Pasted image 20251209165954.png]]
![[Pasted image 20251209170048.png]]
