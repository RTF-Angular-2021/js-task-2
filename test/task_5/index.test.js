const { importFromCsv } = require('../../src/task_5/index');

const phoneBook = [];

const csv = [
	'+7-800-555-35-35;Борис;boris@example.com',
	'+7-800-333-55;Григорий;grisha@example.com',
	'Алексей;alex@example.com',
	'+7-800-555-35-35;Валерий;valera@example.com',
	'+78005551111;Артем;artem@example.com'
].join('\n');

test('Экспортирует изи csv', () => {
	expect(importFromCsv(phoneBook, csv)).toBe(3);
});