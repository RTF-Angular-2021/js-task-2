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
	for (let phones of phoneBook){
		if (phones.phone.replace(/-/g, "") == phone.replace(/-/g, "")){
			phones.name = name;
			if (email instanceof String) 
				phones.email = email;

			return true;
		}
	} 
	if (phone.search(/^\+\d-\d{3}-\d{3}-\d{2}-\d{2}$|^\+\d{11}$/) == -1
		|| !name) return false;

	return false;
}

module.exports.update = update;
