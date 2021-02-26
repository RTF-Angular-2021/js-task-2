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
	if (!isCorrectPhoneNumber(phone) || name == null || name == "")
		return false;
	
	phone = parsePhoneNumber(phone);
	for (note of phoneBook) 
		if (note.phone === phone)
			return false;
	
	phoneBook.push({phone: phone, name: name, email: email});
	return true;
}

function isCorrectPhoneNumber(phone) {
	return (phone.length === 16 && phone.match(/[+]7-\d{3}-\d{3}-\d{2}-\d{2}/) !== null)
		|| (phone.length === 12 && phone.match(/[+]7\d{10}/) !== null)
}

function parsePhoneNumber(phone) {
	const parts = phone.split("-");
	return parts.length === 1 ? phone : parts[0] + parts[1] + parts[2] + parts[3] + parts[4];
}


module.exports.add = add;
