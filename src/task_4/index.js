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
	if (query === '') return 0;
	if (query === '*') {
		let removedItemsCount = phoneBook.length;
		phoneBook.splice(0, removedItemsCount);
		return removedItemsCount; 
	}
	
	let removedItemsCount = 0;
	for (let i = 0; i < phoneBook.length; i++) {
		const note = phoneBook[i];

		if (parsePhoneNumberDash(note.phone).includes(query) || parsePhoneNumberNoDash(note.phone).includes(query) || note.name.includes(query) 
			|| (note.email != null && note.email.includes(query))) {
			removedItemsCount++;
			phoneBook.splice(i, 1);
			i--;
		}
	}
	
	return removedItemsCount;
}

function parsePhoneNumberDash(phone) {
	return !phone.includes("-") ? `+7-${phone.substr(2,3)}-${phone.substr(5,3)}-${phone.substr(8,2)}-${phone.substr(10,2)}` : phone;
}

function parsePhoneNumberNoDash(phone) {
	const parts = phone.split("-");
	return parts.length === 1 ? phone : parts[0] + parts[1] + parts[2] + parts[3] + parts[4];
}


const phoneBook = [{phone: '+7-800-555-35-35', name: 'Андрей', email: 'andrey@mail.ru'}, {phone: '+79225553535', name: 'Роман'}];
console.log(findAndRemove(phoneBook, ''));
console.log(phoneBook);

module.exports.findAndRemove = findAndRemove;
