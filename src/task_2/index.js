/** Задача 2 - Функция update
Требуется написать функцию update, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Номер телефон
	3) Имя
	4) Электронную почту,
требуется:
в текущем состояние телефонной книги обновить контакт по номеру телефона
	1) Электронную почту можно стереть, а имя нет
	2) Правила валидации полей такое же, как и при добавлении
возвращает:
	true - если обновление прошло успешно
	false - если запись не обновилась
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} phone Номер телефона
@param {string} name Имя
@param {string} email Электронная почта
@returns {boolean} Результат обновления
 */
function update(phoneBook, phone, name, email) {
	phone = parsePhoneNumber(phone);
	let note = phoneBook.find(note => parsePhoneNumber(note.phone) === phone);
	if (note === undefined)
		return false;

	if (name !== "" && name !== undefined && name !== null) 
		note.name = name;
	else return false;

	if (email !== undefined && email !== null) note.email = email;
	
	return true;
}

function parsePhoneNumber(phone) {
	const parts = phone.split("-");
	return parts.length === 1 ? phone : parts[0] + parts[1] + parts[2] + parts[3] + parts[4];
}

module.exports.update = update;
