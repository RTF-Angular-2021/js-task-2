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
		if (phoneBook[key].phone === phone || phoneBook[key].phone.split('-').join('')
			=== phone.split('-').join('')) {
			phoneBook[key].name = name;
			phoneBook[key].email = email;
			return true
		}
	}
	console.log(phoneBook);
	return false
}

const phoneBook = [];

module.exports.update = update;
