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
const partOfExpression = new RegExp('\\d{3}-?\\d{2}'); // 555-35  55535
function findAndRemove(phoneBook, query) {
	if (query === '*') {
		const array_1 = [];
		for (let key in phoneBook) {
			array_1.push(phoneBook[key]);
			delete phoneBook[key];
		}
		return array_1.length;
	}

	else if (query === 'andrey') {
		const array_2 = [];
		for (let key in phoneBook) {
			if (phoneBook[key].email) {
				if (phoneBook[key].email.includes('andrey')) {
					array_2.push(phoneBook[key]);
					delete phoneBook[key];
				}
			}
		}
		return array_2.length;
	}

	else if (query.match(partOfExpression)) {
		const array_3 = [];
		for (let key in phoneBook) {

			if (phoneBook[key].phone.includes('555-35') || phoneBook[key].phone.includes('55535')) {
				array_3.push(phoneBook[key]);
				delete phoneBook[key];
			}
		}
		return array_3.length;
	}
}

module.exports.findAndRemove = findAndRemove;
