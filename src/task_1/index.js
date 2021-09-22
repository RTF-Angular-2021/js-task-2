class Contact {
	constructor(phone, name, email = "") {
		this.phone = phone;
		this.name = name;
		this.email = email;
	}
}

const phoneRegExpHyphen = /^\+\d-(\d{3}-){2}(\d{2})-(\d{2})$/;
const phoneRegExpStraight = /^\+\d{11}/;

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
function add(phoneBook, phone, name, email) {
	if (name.length == 0) {
		return false;
	}

	if (!phoneRegExpHyphen.test(phone) &&
		!phoneRegExpStraight.test(phone)) {
		return false;
	}

	for (const cont of phoneBook) {
		if (phone == cont.phone) {
			return false;
		}
	}

	phoneBook.push(new Contact(phone, name, email));
	return true;
}

module.exports.add = add;
