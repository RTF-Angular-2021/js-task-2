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
	let deletedNumbers = 0;
	if (query === '*') {
		for (let item in phoneBook) {
			delete phoneBook[item];
			deletedNumbers++;
		}
		return deletedNumbers;
	}
	for (let item in phoneBook) {
		if (phoneBook[item] !== undefined) {
			if (phoneBook[item].name.includes(query) || phoneBook[item].phone.includes(query.replace(/-/g, ''))) {
				delete phoneBook[item];
				deletedNumbers++;
				continue;
			}
			if (phoneBook[item].email !== undefined && phoneBook[item].email.includes(query)) {
				delete phoneBook[item];
				deletedNumbers++;
			}
		}
	}
	return deletedNumbers;
}
module.exports.findAndRemove = findAndRemove;
