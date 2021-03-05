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
let { find } = require('../task_3/index');

function findAndRemove(phoneBook, query, counter=0) 
{
	let firstBufer;
	let secondBufer;
	let array;

	if (query == '*')
	{
		counter = find(phoneBook, query).filter(x => x).length;
		delete(phoneBook[{}]);		
	}
	else
	{
		for(let item of phoneBook)
		{
			secondBufer = item.phone.replace(/\D/g,'');
    		array = secondBufer.split('');
    		firstBufer = array.join('');
    		secondBufer = `+${array[0]}-${array[1]+array[2]+array[3]}-${array[4]+array[5]+array[6]}-${array[7]+array[8]}-${array[9]+array[10]}`; //Sorry. Велосипеды в час ночи. В следущий раз учту свое время.
			if (firstBufer.includes(query)||secondBufer.includes(query)||item.name.includes(query)||(item.email &&item.email.includes(query)))
			{
				phoneBook = phoneBook.filter(q => q !== item);
				counter++;
			}
		}
	}

	return counter;
}

module.exports.findAndRemove = findAndRemove;