import _ from 'lodash'
// ЗАДАНИЕ 1

const counter1 = { items: 1 }

const counter2 = new Object({ items: 1 })

const counter3 = Object({ items: 1 })

function CounterCreatorFunc() {
	this.items = 1
}
const counter4 = new CounterCreatorFunc()

class CounterCreatorClass {
	constructor() {
		this.items = 1
	}
}
const counter5 = new CounterCreatorClass()

const counter6 = Object.assign({}, { items: 1 })

const counter7 = Object.create(null)
counter7.items = 1

const counter8 = Object.create(
	{},
	{
		items: {
			value: 1,
			configurable: true,
			enumerable: true,
			writable: true,
		},
	}
)

const counter9 = Object.defineProperty({}, 'items', {
	value: 1,
	configurable: true,
	enumerable: true,
	writable: true,
})

const counter10 = Object.defineProperties(
	{},
	{
		items: {
			value: 1,
			configurable: true,
			enumerable: true,
			writable: true,
		},
	}
)

function createCounter() {
	return {
		items: 1,
	}
}
const counter11 = createCounter()

const counterHandler = {
	get: function () {
		return Reflect.get(...arguments)
	},
}

const counter12 = new Proxy({ items: 1 }, counterHandler)

//..........................................................................

// ЗАДАНИЕ 2

const shallowOriginal = { a: 1, b: 2 }
const deepOriginal = { a: 1, b: { c: 2, d: { e: 3 } } }

// Поверхностное копирование

const copy1 = { ...shallowOriginal }

const copy2 = Object.assign({}, shallowOriginal)

// Глубокое копирование

const copy3 = JSON.parse(JSON.stringify(deepOriginal))

const copy4 = _.clone(deepOriginal)
const copy5 = _.cloneDeep(deepOriginal)

const copy6 = structuredClone(deepOriginal)

function deepCopy(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj
	}
	let temp = obj.constructor()
	for (let key in obj) {
		temp[key] = deepCopy(obj[key])
	}
	return temp
}

// ..........................................................................

// ЗАДАНИЕ 3

function makeCounter1() {
	return { items: 1 }
}

const makeCounter2 = function () {
	return { items: 1 }
}

const makeCounter3 = function innerFunc() {
	return { items: 1 }
}

const makeCounter4 = () => ({ items: 1 })

const makeCounter5 = new Function('return { items: 1 }')

function* makeCounter6() {
	let count = 1
	while (true) {
		yield { items: count++ }
	}
}

async function makeCounter7() {
	return { items: 1 }
}

const counterObj1 = {
	makeCounter8: function () {
		return { items: 1 }
	},
}

const counterObj2 = {
	makeCounter9() {
		return { items: 1 }
	},
}

// ..........................................................................

// ЗАДАНИЕ 4

/*
Функция structeredClone() позволяет создавать глубокие копии объектов, включая их вложенные структуры. Функция способна клонировать бесконечно вложенные объекты и массивы, а также клонировать циклические ссылки. Помимо этого у нее довольно широкий спектр типов которые она может клонировать, а именно:

 - Array
 - ArrayBuffer
 - Boolean
 - DataView
 - Date
 - Error types (некоторые).
 - Map
 - Number
 - Object objects: только простые объекты.
 - Primitive types (кроме типа symbol).
 - RegExp: (lastIndex не сохраняется).
 - Set
 - String
 - TypedArray

 Есть некоторые ограничения, а именно:

 - Не может клонировать функции
 - Не может клонировать DOM node
 - Не сохраняет метаданные свойств или дескрипторы
 - Не сохраняет неперечислимые свойства

 В options этой функции есть такое свойство как transfer. С помощью него можно перемещать объекты между исходными и клонированными объектами без создания дубликатов. Исходный объект не может быть использован после переноса.

 Пример:

const uInt8Array = Uint8Array.from({ length: 1024 * 1024 * 16 }, (v, i) => i);

const transferred = structuredClone(uInt8Array, {
  transfer: [uInt8Array.buffer],
});

console.log(uInt8Array.byteLength); // 0
*/

// БОНУСНОЕ ЗАДАНИЕ 1

function deepEqual(obj1, obj2) {
	if (obj1 === obj2) {
		return true
	}

	if (
		obj1 == null ||
		typeof obj1 != 'object' ||
		obj2 == null ||
		typeof obj2 != 'object'
	) {
		return false
	}

	let keysObj1 = Object.keys(obj1)
	let keysObj2 = Object.keys(obj2)

	if (keysObj1.length != keysObj2.length) {
		return false
	}

	for (let key of keysObj1) {
		if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
			return false
		}
	}

	return true
}

const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' }
const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' }

console.log(deepEqual(obj1, obj2))

// ..........................................................................

// БОНУСНОЕ ЗАДАНИЕ 2

const reverseStr1 = str => str.split('').reverse().join('')

const reverseStr2 = str =>
	str.split('').reduce((reversed, character) => character + reversed)

const reverseStr3 = str => {
	let reversed = ''
	str.split('').forEach(char => {
		reversed = char + reversed
	})
	return reversed
}
