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
	let parsed = phone.split("-");
	for (let i = 0; i < phoneBook.length; i++)
	{
		if (phoneBook[i].phone.split("-").join("") === parsed.join("") && 
			typeof name != "undefined" && 
			name.length != 0 &&
			(parsed.length == 5 || parsed.length == 1))
		{
			phoneBook[i].name = name;
			phoneBook[i].email = email;
			return true;
		}
	}
	return false;
}

module.exports.update = update;
