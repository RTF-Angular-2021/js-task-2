const { add } = require('../../src/task_1/index');
const { findAndRemove } = require('../../src/task_4/index');

const phoneBook = [];

test('Удалит все записи по запросу *', () => {
	add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
	add(phoneBook, '+79225553535', 'Роман');
	expect(findAndRemove(phoneBook, '*')).toBe(2);
});

test('Удалит все записи по запросу andrey', () => {
	add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
	add(phoneBook, '+79225553535', 'Роман');
	expect(findAndRemove(phoneBook, 'andrey')).toBe(1);
});

test('Удалит все записи по запросу 555-35', () => {
	add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
	add(phoneBook, '+79225553535', 'Роман');
	expect(findAndRemove(phoneBook, '555-35')).toBe(2);
});