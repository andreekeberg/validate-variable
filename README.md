# JavaScript Variable Name Validator

[![Version](https://img.shields.io/npm/v/validate-variable)](https://www.npmjs.com/package/validate-variable) [![Total Downloads](https://img.shields.io/npm/dt/validate-variable)](https://www.npmjs.com/package/validate-variable) [![License](https://img.shields.io/npm/l/validate-variable)](https://www.npmjs.com/package/validate-variable)

Validate any string as a JavaScript variable name, taking into consideration both the ECMAScript 6 specification and Unicode 8.0.0, as well as reserved words and invalid escape sequences in older engines.

Adapted from [JavaScript identifier validator](https://github.com/mathiasbynens/mothereff.in/tree/master/js-variables) by [Mathias Bynens](https://mathiasbynens.be/) and repackaged as an npm module.

## Installation

**Using npm**

```
npm install validate-variable
```

**Using yarn**

```
yarn add validate-variable
```

## Importing

**Import as an ES6 module**

```javascript
import validateVariable, { isValidVariable } from 'validate-variable'
```

**Import as a CommonJS module**

```javascript
const { validateVariable, isValidVariable } = require('validate-variable')
```

## Basic usage

```javascript
console.log(isValidVariable('ಠ_ಠ'))
```

Returning:

```javascript
true
```

## Advanced usage

Includes any errors and/or warnings with the return value.

### With errors

```javascript
console.log(validateVariable('await'))
```

Returning:

```javascript
{
	valid: false,
	errors: {
		reserved: true
	}
}
```

### With warnings

```javascript
console.log(validateVariable('undefined'))
```

Returning:

```javascript
{
	valid: true,
	warnings: {
		immutable: true
	}
}
```

## Types of errors

### invalidIdentifier

The format of the variable name is invalid according to ES6 + Unicode 8.0.0

### reserved

The variable matches any reserved keywords like `return` or `await`

## Types of warnings

### es3

The variable is an ES3 reserved word. You may want to avoid using it if support for older JavaScript engines is a concern.

### es5

Invalid identifier as per ES5. You may want to avoid using it if support for older JavaScript engines is a concern.

### zeroWidth

The variable contains zero-width characters that are allowed in IdentifierPart as per ES5, but not in ES3. You may want to avoid using it if support for older JavaScript engines is a concern.

### unicode

Invalid identifier according to Unicode v5.1.0. You may want to avoid using it if support for JavaScript engines with outdated Unicode data tables is a concern.

### immutable

The `NaN`, `Infinity`, and `undefined` properties of the global object are immutable or read-only. Setting them won’t have an effect. Avoid using them as variable names.

## Strict mode

Activate **strict mode** by setting the second argument to `true` when calling either method.
This makes any warnings return an invalid result.

```javascript
console.log(isValidVariable('NaN', true))
```

Returning:

```javascript
false
```

## License

Licensed under the [GPL 2.0 license](LICENSE).
