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
	const typeOfPhone1 = new RegExp("^\\+7\\-\\d{3}\\-\\d{3}\\-\\d{2}\\-\\d{2}$");
	const typeOfPhone2 = new RegExp("^\\+7\\d{10}$");
	const typeOfEmail   = new RegExp("^\\w+@\\w+\\.\\w+$");

	const item = {}
	if (typeOfPhone1.test(phone) || typeOfPhone2.test(phone)) {
		item.phone = phone;
	}
	else if (!typeOfPhone1.test(phone) || !typeOfPhone2.test(phone) || !name) {
		return false
	}

	if (typeof name === "string" && name.length > 1) {
		item.name = name;
	}
	else {
		return false
	}

	if (!email || typeOfEmail.test(email)) {
		item.email = email;
	}
	else {
		return false
	}

	for (const key in phoneBook) {
		if (phoneBook[key].phone === phone || phoneBook[key].phone.split('-').join('') === phone.split('-').join('')) {
			return false
		}
	}
	phoneBook.push(item);
	return true
}

let myPhoneBook = []
module.exports.add = add;
