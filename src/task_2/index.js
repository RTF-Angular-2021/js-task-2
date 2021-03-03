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
function CorrectPhone(phone)
{
	const firstPhone = /\+7\d{10}/;
		const secondPhone = /\+7\-\d{3}\-\d{3}\-\d{2}\-d{2}/;
		if (phone.match(firstPhone) !== null)
		{
			return phone;
		}
		if (phone.match(secondPhone) !== null)
		{
			return phone.replace(/-/g, '');
		}
}
function update(phoneBook, phone, name, email) 
{
	const correctphone = CorrectPhone(phone);

	if (name === '' || name === undefined)
	{
		return false;
	}
	if (correctphone === null)
	{
		return false;
	}
	for (let number of phoneBook)
	{
		if (number !== undefined && number.phone == correctphone)
		{
			number.name = name;
			number.email = email;
			number.phone = phone;
			return true;
		}
		return false;
	}
}

module.exports.update = update;
