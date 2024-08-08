var name = prompt('Введите ваше имя') 
var age = prompt('Введите ваш возраст')

console.log('Здраствуйте! ' + name);
console.log('Ваш возраст: ' + age);

var example1 = prompt('Решите задачу 100 + 50 = ? ')
var example2 = prompt('Решите задачу 110 - 60 = ? ')
var example3 = prompt('Решите задачу 120 * 70 = ? ')
var example4 = prompt('Решите задачу 160 / 80 = ? ')
var example5 = prompt('Решите задачу 190 % 90 = ? ')

console.log('100 + 50 = ' +(100 + 50) + ' Ваш ответ: ' + example1);
console.log('110 - 60 = ' +(110 - 60) + ' Ваш ответ: ' + example2);
console.log('120 * 70 = ' + 120 * 70 + ' Ваш ответ: ' + example3);
console.log('160 / 80 = ' + 160 / 80 + ' Ваш ответ: ' + example4);
console.log('190 % 90 = ' + 190 % 90 + ' Ваш ответ: ' + example5);


var x = +prompt('Введите первое число'),
    y = +prompt('Введите второе число'),
    z = +prompt('Введите третье число'),
    res = (x + y + z) / 3

console.log('Среднее арифметическое: ' + res)

alert('Откройте консоль для просмотра ответов')


