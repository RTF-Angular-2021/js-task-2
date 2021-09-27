const { Contact } = require('../../src/task_1/index');
const { find } = require('../../src/task_3/index');
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
	let foundContacts = find(phoneBook, query);
	let countRemoved = 0;
	for(const contact of foundContacts){
		let phone = Contact.getStrippedPhone(contact.split(' ').splice(1, 4).join(''));
		let foundContactIndex = phoneBook.findIndex(cntc => cntc.phone === phone);
		if(foundContactIndex != -1){
			phoneBook.splice(foundContactIndex, 1);
			countRemoved = countRemoved + 1;
		}
	}
	return countRemoved;
}

module.exports.findAndRemove = findAndRemove;
