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
	const firstVariant = /\+7\d{3}\d{3}\d{2}\d{2}/,
		  secondVariant = /\+7-\d{3}-\d{3}-\d{2}-\d{2}/;

	const check = phoneBook.filter(item => 
		(item.phone.replace(/-/g,'') === phone.replace(/-/g,'') 
		|| item.phone === phone) 
		&& (firstVariant.test(phone) || secondVariant.test(phone)));
	

	for (let i = 0; i < phoneBook.length; i++) {
		if (check.length > 0 && name) {
			phoneBook[i].name = name;
			if (email) phoneBook[i].email = email;
			return true;
		} else return false;
	}			
}

module.exports.update = update;
