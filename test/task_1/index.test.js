const { add } = require('../../src/task_1/index');

const phoneBook = [];

test('Добавляет корректные записи', () => {
	expect(add(phoneBook, '+78005553535', 'Сергей', 'sergey@mail.ru')).toBe(true);
	expect(add(phoneBook, '+7-800-333-55-55', 'Антон', 'anton@mail.ru')).toBe(true);
	expect(add(phoneBook, '+7-922-555-35-35', 'Алексей')).toBe(true);
});

test('Не добавляет некорректные записи', () => {
	expect(add(phoneBook, '+7800555353', 'Сергей', 'sergey@mail.ru')).toBe(false);
	expect(add(phoneBook, '+7-800-333-55', 'Антон', 'anton@mail.ru')).toBe(false);
	expect(add(phoneBook, '+7(922)555-35-35', 'Алексей')).toBe(false);
	expect(add(phoneBook, '+79225550000', '')).toBe(false);
	expect(add(phoneBook, '+79225550000')).toBe(false);
});

test('Не добавляет уже созданные записи', () => {
	expect(add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru')).toBe(false);
	expect(add(phoneBook, '+7-922-555-35-35', 'Роман', 'roman@mail.ru')).toBe(false);
	expect(add(phoneBook, '+79225553535', 'Миша')).toBe(false);
});