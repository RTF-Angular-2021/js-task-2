const { TestScheduler } = require("jest")

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
const truePhone = (item, query) => item.filter(({ phone, name, email }) => {
	if (query === '*') return true 
	
	const delet = phone.replace(/\D/g, '')
	const formatPhone = `+7 (${delet.substr(1, 3)}) ${delet.substr(4, 3)}-${delet.substr(7, 2)}-${delet.substr(9)}`
	if (email === undefined){
		if ((delet.includes(query.replace(/\D/g, ''))&& query.replace(/\D/g, '').length !== 0 ) || name.includes(query)){
			return true
		}
	}
	else{
		if (delet.includes(query.replace(/\D/g, '')) || name.includes(query) || email.includes(query)){
         return true
		}
		
	} 
	return false
}).map(({ phone, name, email }) => {
	const delet = phone.replace(/\D/g, '')
	const formatPhone = `+7 (${delet.substr(1, 3)}) ${delet.substr(4, 3)}-${delet.substr(7, 2)}-${delet.substr(9)}`
	if (email === undefined){
		return name + ' ' + formatPhone
	}
	else return name + ' ' + formatPhone + ' ' + email
})

function find(phoneBook, query) {
	if (query !== '' && query !== undefined) {
		return truePhone(phoneBook, query)
	}
	return []

}

module.exports.find = find