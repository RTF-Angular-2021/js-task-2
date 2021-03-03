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
function findAndRemove(phoneBook, query) {
	let count = 0;

	if (query === '*') {
		for (let obj in phoneBook) {
            delete phoneBook[obj];
			count++;
	    }
		return count;
	}

	for (let obj in phoneBook) {
		if (phoneBook[obj] !== undefined) {
			
			if (phoneBook[obj].name.includes(query) || phoneBook[obj].phone.includes(query.replace(/-/g,''))
			|| phoneBook[obj].phone.includes(query)) {
				delete phoneBook[obj];
				count++;
				continue;
			}

			if (phoneBook[obj].email !== undefined){
				if (phoneBook[obj].email.includes(query)) {
					delete phoneBook[obj];
					count++;
				}
			}
		}
	}
	return count;
}



module.exports.findAndRemove = findAndRemove;
