/** Задача 2 - Функция find
Требуется написать функцию find, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти все записи, которые удовлетворяют требованиям
	1) Одно из полей name, email содержит подстроку поиска
	2) Поиск по полю phone проводится по следующим правилам:
		2.1) При запросе +7-800-555-35-35 должны отображаться записи с номерами +7-800-555-35-35 и +78005553535
		2.2) При запросе +78005553535 должны отображаться записи с номерами +78005553535 и +7-800-555-35-35
	2) Пустой запрос не должен ничего находить
	3) Запрос «*» находит все записи
возвращает:
	Отсортированный по полю name массив строк в формате name, phone, email
	Поле phone должно быть отформатировано в виде +7 (999) 111-22-33
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {Array<string>} Результаты поиска
 */
function find(phoneBook, query) {
	let sortedArray = [];

	for (let i = 0; i < phoneBook.length; i++) {
		sortedArray.push(formatContact(phoneBook[i].phone, phoneBook[i].name, phoneBook[i].email));
	}

	if (query === '*') {
		return sortedArray;
	} else {
		return sortedArray.filter(item => item.includes(query));
	}

}

function formatContact (phone,name,email) {
	phone = phone.replace(/-/g,'')
	const correctphone = `+7 (${phone.slice(2,5)}) ${phone.slice(5,8)}-${phone.slice(8,10)}-${phone.slice(10,12)}`;
	
	if (email !== undefined) {
		return `${name} ${correctphone} ${email}`;
	}
    else return `${name} ${correctphone}`
}



module.exports.find = find;
