/** Задача 2 - Функция find
Требуется написать функцию find, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти все записи, которые удовлетворяют требованиям
	1) Одно из полей name, email содержит подстроку поиска
	2) Поиск по полю phone проводится по следующим правилам:
		2.1) При запросе +7-800-555-35-35 должны отображаться записи с номерами +7-800-555-35-35 и +78005553535
		2.2) При запросе +78005553535 должны отображаться записи с номерами +78005553535 и +7-800-555-35-35
	2) Пустой запрос не должен ничего находить
	3) Запрос «*» находит все записи
возвращает:
	Отсортированный по полю name массив строк в формате name, phone, email
	Поле phone должно быть отформатировано в виде +7 (999) 111-22-33
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {Array<string>} Результаты поиска
 */
function phone (phone, name, email)
{
	const correct = `+7 (${phone.slice(1,4)}) ${phone.slice(4,7)}-${phone.slice(7,9)}-${phone.slice(9,11)}`;
	if (email === undefined)
	{
		return `${name} ${correct}`;
	}
	return `${name} ${correct} ${email}`;
}
function find(phoneBook, query) 
{
	let Arr = [];

	if (query === '*')
	{
		phoneBook.forEach(element => {Arr.push(correct(element.phone, element.name, element.email));});
		return Arr;
	}

	phoneBook.forEach(element => 
		{
			if (element !== undefined)
			{
				if (element.name.includes(query))
				{
					Arr.push(correct(element.phone, element.name, element.email));
				}
				if (element.phone.includes(query.replace(/-/g, '')))
				{
					Arr.push(correct(element.phone, element.name, element.email));
				}
				if (element.email.includes(query))
				{
					Arr.push(correct(element.phone, element.name, element.email));
				}
			}
		});
		return Arr;
}

module.exports.find = find;

