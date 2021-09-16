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
const {find} = require("../task_3");

const partOfExpression = new RegExp('\\d{3}-?\\d{2}'); // 555-35  55535

function findAndRemove(phoneBook, query) {
	let del = find(phoneBook, query);
	del.forEach(item => {
		delete phoneBook[item]
	})
	return del.length;
}

module.exports.findAndRemove = findAndRemove;
