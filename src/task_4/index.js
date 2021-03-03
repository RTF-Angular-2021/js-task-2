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
function findAndRemove(phoneBook, query) 
{
	let counter = 0;
	for (let i in phoneBook)
	{
		if (phoneBook[i] !== undefined)
		{
			if (phoneBook[i].name.includes(query))
			{
				delete phoneBook[i];
				counter++;
				continue;
			}
			if (phoneBook[i].phone.includes(query.replace(/-/g, '')))
			{
				delete phoneBook[i];
				counter++;
				continue;
			}
			if (phoneBook[i].email.includes(query))
			{
				delete phoneBook[i];
				counter++;
			}
		}
	}
	if (query === '*')
	{
		for (let i in phoneBook)
		{
			delete phoneBook[i];
			counter++;
		}
	}
	return counter;

}

module.exports.findAndRemove = findAndRemove;

