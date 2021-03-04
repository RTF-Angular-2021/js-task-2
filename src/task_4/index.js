/** Задача 2 - Функция findAndRemove
Требуется написать функцию findAndRemove, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
	1) См. find из task_3
возвращает:
	Число удаленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {number} Количество удаленных записей
 */

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function findAndRemove(phoneBook, query) {
	if (query == '*')
	{
		let deleted = 0;
		while (phoneBook.length != 0)
		{
			phoneBook.pop();
			deleted++;
		}
		return deleted;
	}
	let deleted = 0;
	phoneBook.forEach(element => {
		let parsed = element.phone.split("-").join("");
			parsed = parsed.splice(2,0,"(");
			parsed = parsed.splice(6,0,")");
			parsed = parsed.splice(2,0," ");
			parsed = parsed.splice(8,0," ");
			parsed = parsed.splice(12,0,"-");
			parsed = parsed.splice(15,0,"-");

		let info = `${element.name} ${parsed}`;
		if (typeof element.email != 'undefined') info += ` ${element.email}`;

		if (info.includes(query))
		{
			element = '';
			deleted++;
		}
	});
	phoneBook = phoneBook.filter(function(el) {
		return el != '';
	});
	return deleted;
}

module.exports.findAndRemove = findAndRemove;
