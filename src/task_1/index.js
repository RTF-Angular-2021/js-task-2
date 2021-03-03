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
	const statusName = name != "" && name != undefined
	const statusPhone = Array.from( phone ).filter(x => x.match(/[0-9]/)).length === 11
	const isPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/
	const truePhone = isPhone.test(phone)
	if (truePhone && statusName && statusPhone) {
		const obj = { phone:phone, name: name, email: email }
		for (let k = 0; k < phoneBook.length; k++) {
			const status = Array.from(phoneBook[k].phone).filter(x => x.match(/[0-9]/)).toString() === Array.from(obj.phone).filter(x => x.match(/[0-9]/)).toString()
			if (status === true) {
				return false
			}
		}
		phoneBook.push(obj)
		return true
	}
	else { return false }
}

module.exports.add = add
