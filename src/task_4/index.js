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
function findAndRemove(phoneBook, query) {
	let count = phoneBook.length;
	const firstVariant = /\+7\d{3}\d{3}\d{2}\d{2}/, 
		  secondVariant = /\+7-\d{3}-\d{3}-\d{2}-\d{2}/,
		  email = /[a-z]/,
		  name = /^[a-zA-Zа-яёА-ЯЁ]+$/,
		  number = /[0-9]/;

	if (query === '*') {
		const result = phoneBook.filter(item => 0);
		count -= result.length;
		return count;
	} else if (number.test(query) || firstVariant.test(query) || secondVariant.test(query)) {
		const result = phoneBook.filter(item => item.phone.includes(query.replace(/-/g,'')) || item.phone.includes(query));
		count = result.length;
		return count;
	} else if (email.test(query) || name.test(query)) {
		const result = phoneBook.filter(item => 
			(item.email && item.email.includes(query)) 
			|| (item.name && item.name.includes(query)));
		count = result.length;
		return count;
	}
}

module.exports.findAndRemove = findAndRemove;
