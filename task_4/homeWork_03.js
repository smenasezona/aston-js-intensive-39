// ЗАДАНИЕ 1

/*
Массивы в JS считаются "неправильными" из-за:
- Динамических размеров
- Произвольного типа данных
- Могут быть ассоциативными
- Прототипное наследование (???)

Массивы совмещают в себе следующие структуры данных:
- Динамические списки
- Стеки
- Очереди
- Упорядоченный список
*/

// ЗАДАНИЕ 2

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {item: "some value"};

logger.call(obj)
logger.apply(obj)
logger.bind(obj)()

// ЗАДАНИЕ 3

//3.1.1
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8].reduce((cur, acc) => acc += cur)

//3.1.2
const arr2 = ['home', 'work', 'number', 'three'].join('')

//3.1.3
const arr3 = [10, 2, 33, 5, 67, 3, 23, 8]
console.log(`min elem of array: ${Math.min(...arr3)}; max elem of array: ${Math.max(...arr3)}`)

// 3.2
class Stack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    return this.stack.pop()
  }
}

// 3.3
class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(item) {
    this.queue.push(item);
    console.log(`${item} встал в очередь`);
  }

  dequeue() {
    if (this.queue.length === 0) {
      console.log("Очередь пуста");
      return;
    }
    const item = this.queue.shift();
    console.log(`${item} обслужен`);
    return item;
  }
}

const supermarket = new Queue()

supermarket.enqueue('Customer1')
supermarket.enqueue('Customer2')
supermarket.enqueue('Customer3')

supermarket.dequeue()
supermarket.dequeue()
supermarket.dequeue()

// БОНУСНОЕ ЗАДАНИЕ

if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...bindArgs) {
    if (typeof this !== 'function') {
      throw new TypeError('bind must be called on a function');
    }

    const fn = this;

    return function (...callArgs) {
      return fn.apply(context, [...bindArgs, ...callArgs]);
    };
  };
}




