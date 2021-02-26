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
	let count, array = [], newArray = [];
	const email = /[a-z]/;
	const number = /[0-9]/;

	for (let i = 0; i < phoneBook.length; i++) {
		if (phoneBook[i].email) {
			array.push([phoneBook[i].phone.replace(/-/g, ''), phoneBook[i].name, phoneBook[i].email]);
		} else {
			array.push([phoneBook[i].phone.replace(/-/g, ''), phoneBook[i].name]);
		}
	}

	if (query === '*') {
		count = array.length;
		return count;
	} else if (email.test(query) || number.test(query)) {
		query.replace(/-/g, '');
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array[i].length; j++) {
				if(array[i][j].includes(query)) {
					newArray.push([array[i]]);
				}
			}
		}
		count = array.length - newArray.length;
		return count;
	}
}

module.exports.findAndRemove = findAndRemove;
