/** Задача 1 - Функция add
Требуется написать функцию add, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефон
	3) Имя
	4) Электронную почту,
требуется:
в текущее состояние телефонной книги добавить новый контакт по правилам
	1) Телефоны принимаются только в форматах +7-999-111-22-33 или +79991112233
	2) Не добавляется уже существующая запись
	3) Не добавляется запись без имени
возвращает:
	true - если добавление прошло успешно
	false - если запись не создалась или не добавилась в книгу
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} phone Номер телефона
@param {string} name Имя
@param {string} email Электронная почта
@returns {boolean} Результат добавления
 */

 const re = /((8|\+7)-?)?\(?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}/g
function add(phoneBook = [], phone, name, email) {
	let item = {phone: phone, name: name, email: email};
	if(phoneBook.some(i => i.phone === phone)) return false;
	if(!phone.match(re) || !name)
		return false;
	phoneBook.push(item);
	return true;
}

let phoneBook = []
add(phoneBook, '+78005553535', 'Сергей', 'sergey@mail.ru')
add(phoneBook, '+7-800-333-55-55', 'Антон', 'anton@mail.ru')
add(phoneBook, '+78005553535', 'Сергей', 'sergey@mail.ru')

module.exports.add = add;
