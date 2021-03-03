/** Задача 2 - Функция findAndRemove
Требуется написать функцию findAndRemove, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
	1) См. find из task_3
возвращает:
	Число удаленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {number} Количество удаленных записей
 */
const { find } = require('../../src/task_3/index');

function findAndRemove(phoneBook, query) 
{
	let firstBufer;
	let secondBufer;
	let array;
	let counter = 0;
	if (query == '*')
	{
		counter = find(phoneBook, query).length;
		delete(phoneBook[{}]);
	}
	else
	{
		for(const check of phoneBook) // искренне пытался делать с помощью "find", но получал очень странные результаты, потому отказался от идеи
		{
			secondBufer = check.phone.replace(/\D/g,'');
    		array = secondBufer.split('');
    		firstBufer = array.join('');
    		secondBufer = `+${array[0]}-${array[1]+array[2]+array[3]}-${array[4]+array[5]+array[6]}-${array[7]+array[8]}-${array[9]+array[10]}`;
			if (firstBufer.includes(query)||secondBufer.includes(query)||check.name.includes(query)||(check.email !== undefined && check.email.includes(query)))
			{
				delete phoneBook[check];
				counter++;
			}
		}
	}

	return counter;
}

module.exports.findAndRemove = findAndRemove;
