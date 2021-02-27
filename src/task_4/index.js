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
const { formatNumber } = require('../../src/task_3/index');

function findAndRemove(phoneBook, query) {
	let deleteNum = 0;
	if (query === "*"){
		deleteNum = phoneBook.length;
		phoneBook.splice(0, deleteNum);
	} else {
		for (let i = 0; i < phoneBook.length; i++){
			let entry = phoneBook[i];
			let email = entry.email? ' ' + entry.email : '';
			let phonePair = formatNumber(entry.phone, 'f');
			let strEntryF1 = `${entry.name} ${phonePair[0]}${email}`;
			let strEntryF2 = `${entry.name} ${phonePair[1]}${email}`;
			if (strEntryF1.includes(query) || strEntryF2.includes(query)){
				phoneBook.splice(i, 1);
				deleteNum++;
				i--;
			}
		}
	}
	return deleteNum;
}

module.exports.findAndRemove = findAndRemove;
