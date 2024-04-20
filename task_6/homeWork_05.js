// 1 Задание
let promiseTwo = new Promise((resolve, reject) => {
	resolve('a')
})

promiseTwo
	.then(res => res + 'b')
	.then(res => res + 'c')
	.finally(res => res + '!!!!!')
	.catch(res => res + 'd')
	.then(res => console.log(res))

// В консоль будет выведено: "abc" (Потому что finally не изменяет значение промиса и не получает значений из вышестоящих коллбеков, а catch не отработает, так как исключений или ошибок в нашей цепочке нет.)

// 2 Задание
function doSmth() {
	return Promise.resolve('123')
}

doSmth()
	.then(function (a) {
		console.log('1', a)
		return a
	})
	.then(function (b) {
		console.log('2', b)
		return b
	})
	.catch(function (err) {
		console.log('3', err)
	})
	.then(function (c) {
		console.log('4', c)
		return c
	})

// В консоль будет выедено: 1 123 2 123 4 123. then принимает наш "123" и просто добавляет к нему 1 2 4. catch не отрабатывает потому что никакого исключения в then не было.

// Задание 3
const nums = [10, 12, 15, 21]

function indexInterval(arr) {
	let index = 0
	const interval = setInterval(() => {
		if (index >= arr.length) {
			clearInterval(interval)
		} else {
			console.log(`Element: ${arr[index]}; Index: ${index}`)
			index++
		}
	}, 3000)
}

indexInterval(nums)

// Задание 4
/*
Top Level Await в JavaScript позволяет использовать await в верхней части модулей, избавляя от необходимости оборачивать асинхронные задачи в функции. Таким образом, можно напрямую получать и использовать данные из асинхронных источников. Тем не менее, TLA может замедляться при загрузке модулей, так как выполнение задерживается, пока не будут решены все асинхронные задачи. 
*/

// Бонусное Задание
async function fetchUrl(url) {
	const maxAttempts = 5
	let attempts = 0

	while (attempts < maxAttempts) {
		try {
			const res = await fetch(url)
			if (!res.ok) throw new Error(`error, status: ${res.status}`)
			return await res.json()
		} catch (err) {
			attempts++
			if (attempts === maxAttempts) throw new Error('failed to fetch data!!!')
		}
	}
}

fetchUrl('https://astondevs.ru/')
	.then(data => console.log(data))
	.catch(err => console.error(err))
