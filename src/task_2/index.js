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
	const correctPhone = getCorrectPhone(phone)

	if (name === undefined || name === '' || correctPhone === null) {
		return false;
	}

	for (let element of phoneBook) {
		if (element !== undefined && element.phone === correctPhone) {
			element.phone = phone;
			element.name = name;
			element.email = email;
			return true;
		}
	}

	return false;
}

function getCorrectPhone(phone) {
	if (phone.match(/\+\d-\d{3}-\d{3}-\d{2}-\d{2}/) !== null) {
		return phone.replace(/-/g, '');
	} else if (phone.match(/\+\d{11}/) !== null) {
		return phone;
	} else {
		return null;
	}
}


module.exports.update = update;
