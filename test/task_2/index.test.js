const { add } = require('../../src/task_1/index');
const { update } = require('../../src/task_2/index');

const phoneBook = [];

add(phoneBook, '+7-800-555-35-35', 'Андрей', 'andrey@mail.ru');
add(phoneBook, '+7-922-555-35-35', 'Роман', 'roman@mail.ru');

test('Обновляет существующие записи', () => {
	expect(update(phoneBook, '+79225553535', 'Сергей', 'sergey@mail.ru')).toBe(true);
	expect(update(phoneBook, '+7-800-555-35-35', 'Алексей')).toBe(true);
	expect(update(phoneBook, '+7-800-555-35-35', '')).toBe(false);
	expect(update(phoneBook, '+7-800-555-35-35')).toBe(false);
	expect(update(phoneBook, '+7-800-555-3535', 'Артем')).toBe(false);
});

test('Не обновляет не существующие записи', () => {
	expect(update(phoneBook, 'aaa+79225553535', 'Сергей', 'sergey@mail.ru')).toBe(false);
	expect(update(phoneBook, '+79225553535aaa', 'Сергей', 'sergey@mail.ru')).toBe(false);
	expect(update(phoneBook, '+7-800-555-00-00', 'Сергей')).toBe(false);
});

