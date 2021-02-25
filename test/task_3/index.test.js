const { add } = require('../../src/task_1/index');
const { find } = require('../../src/task_3/index');

const phoneBook = [];

add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
add(phoneBook, '+79225553535', 'Роман');

test('Находит все записи по запросу *', () => {
	const mockResults = [
		'Андрей +7 (800) 555-35-35 andrey@mail.ru',
		'Роман +7 (922) 555-35-35',
	];
	expect(find(phoneBook, '*')).toStrictEqual(mockResults);
});

test('Находит записи по запросу 555-35', () => {
	const mockResults = [
		'Андрей +7 (800) 555-35-35 andrey@mail.ru',
		'Роман +7 (922) 555-35-35',
	];
	expect(find(phoneBook, '555-35')).toStrictEqual(mockResults);
});

test('Находит записи по запросу andrey', () => {
	const mockResults = [
		'Андрей +7 (800) 555-35-35 andrey@mail.ru',
	];
	expect(find(phoneBook, 'andrey')).toStrictEqual(mockResults);
});