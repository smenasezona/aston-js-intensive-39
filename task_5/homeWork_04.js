// Задание 1

/*
- Сортировка пузырьком
- Сортировка вставками
-	Сортировка выбором
-	Быстрая сортировка
-	Сортировка слиянием
-	Пирамидальная сортировка
-	Сортировка Шелла
- Блочная сортировка
-	Разрядная сортировка
-	Сортировка деревом
*/

// Задание 2

/*
1. Арифметические операторы
	+ (сложение)
	- (вычитание)
	* (умножение)
	/ (деление)
	% (остаток от деления)
	** (возведение в степень)
	++ (инкремент)
	-- (декремент

2. Операторы присваивания
	= (присваивание)
	+= (сложение с присваиванием)
	-= (вычитание с присваиванием)
	*= (умножение с присваиванием)
	/= (деление с присваиванием)
	%= (остаток от деления с присваиванием)
	**= (возведение в степень с присваиванием)

3. Строковые операторы
	+ также используется для конкатенации строк.

4. Операторы сравнения
	== (равенство)
	=== (строгое равенство)
	!= (неравенство)
	!== (строгое неравенство)
	> (больше)
	< (меньше)
	>= (больше или равно)
	<= (меньше или равно)

5. Логические операторы
	&& (логическое И)
	|| (логическое ИЛИ)
	! (логическое НЕ)

6. Условный (тернарный) оператор
	?: (тернарный оператор)

7. Операторы типа
	typeof — возвращает строку, указывающую тип операнда.
	instanceof — проверяет, является ли объект экземпляром конкретного класса.

8. Битовые операторы
	& (битовое И)
	| (битовое ИЛИ)
	^ (битовое исключающее ИЛИ)
	~ (битовое НЕ)
	<< (битовый сдвиг влево)
	>> (битовый сдвиг вправо)
	>>> (беззнаковый битовый сдвиг вправо)

9. spread и rest операторы

	... (оператор spread)
	... (оператор rest)

10. Оператор нулевого слияния
	?? (Null coalescing)
*/

// Задание 3

const personLiteral = {
	name: 'Artem',
	age: 22,
	role: 'Frontend dev',
}

class Person {
	constructor(name, age, role) {
		this.name = name
		this.age = age
		this.role = role
	}
}

const person = new Person('Artem', 22, 'Frontend dev')

const person2Literal = {
	name: 'Egor',
	age: 21,
	role: 'Frontend dev',
	__proto__: Person,
}

const person2 = Object.create(person, {
	name: {
		value: 'Egor',
		enumerable: true,
		configurable: true,
		writable: true,
	},
	age: {
		value: 21,
		enumerable: true,
		configurable: true,
		writable: true,
	},
	role: {
		value: 'Frondend dev',
		enumerable: true,
		configurable: true,
		writable: true,
	},
})

Object.prototype.logInfo = function () {
	return `name: ${this.name}; age: ${this.age}; role: ${this.role}`
}

console.log(person.logInfo())
console.log(person2.logInfo())

// Задание 4

class PersonThree extends Person {
	constructor(name, age, role) {
		super(name, age, role)
	}

	get name() {
		return this._name
	}

	set name(value) {
		this._name = value
	}
}

const person3 = new PersonThree('Dima', 23, 'DevOps')

console.log(person3)

person3.name = 'Vladik'
console.log(person3.name)

// БОНУСНОЕ ЗАДАНИЕ

// O(n)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const total = 13

const firstSum = (arr, total) => {
	const hash = {}
	for (let i = 0; i < arr.length; i++) {
		const complement = total - arr[i]
		if (hash[complement]) {
			return [arr[i], complement]
		}
		hash[arr[i]] = i
	}
	return null
}

console.log(firstSum(arr, total))

// O(n^2)
const firstSumV2 = (arr, total) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === total) {
				return [arr[i], arr[j]]
			}
		}
	}
	return []
}

console.log(firstSumV2(arr, total))

// O(n log n)
const firstSumV3 = (arr, total) => {
	arr.sort((a, b) => a - b)
	let left = 0
	let right = arr.length - 1

	while (left < right) {
		const sum = arr[left] + arr[right]
		if (sum === total) {
			return [arr[left], arr[right]]
		} else if (sum < total) {
			left++
		} else {
			right--
		}
	}
	return []
}

console.log(firstSumV3(arr, total))
