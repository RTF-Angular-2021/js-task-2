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
function find(phoneBook, query) {
	let result = [];
	let firstBufer;
	let secondBufer;
	let array;
	if (query ==='')
		return query;

    for (const entry of phoneBook)
	{
		if (query === '*')			
		{
        	secondBufer = entry.phone.replace(/\d/g,'');
        	array = secondBufer.split('');
        	entry.phone =`+${array[0]} (${array[1]+array[2]+array[3]}) ${array[4]+array[5]+array[6]}-${array[7]+array[8]}-${array[9]+array[10]}`;
        	if (entry.email !== undefined)
			{
				result.push(entry.name+' '+entry.phone+' '+entry.email);
			}
			else result.push(entry.name+' '+entry.phone);
    	}
		else
		{ 
    		secondBufer = entry.phone.replace(/\d/g,'');
    		array = secondBufer.split('');
    		firstBufer = array.join('');
    		secondBufer = `+${array[0]}-${array[1]+array[2]+array[3]}-${array[4]+array[5]+array[6]}-${array[7]+array[8]}-${array[9]+array[10]}`;
    		if (firstBufer.includes(query)||secondBufer.includes(query)||(entry.email !== undefined && entry.email.includes(query))||entry.name.includes(query))          
    		{
        		entry.phone =`+${array[0]} (${array[1]+array[2]+array[3]}) ${array[4]+array[5]+array[6]}-${array[7]+array[8]}-${array[9]+array[10]}`;
        		if (entry.email !== undefined)
				{
					result.push(entry.name+' '+entry.phone+' '+entry.email);
				}
				else result.push(entry.name+' '+entry.phone);
    		}	
		}
	}

	return result.sort();			
}

module.exports.find = find;
