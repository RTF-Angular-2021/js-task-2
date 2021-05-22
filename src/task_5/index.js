const {toFormat} = require("../task_1");
const {update} = require("../task_2");
const {add} = require("../task_1");

function importFromCsv(phoneBook, csv) {
	csv = csv.split(["\n"]);
	let count = 0;
	for (let string of csv) {
		let items = string.split(";");
		if (items.length !== 3 || String(toFormat(items[0])).length !== 11)
			continue;
		if (add(phoneBook, items[0], items[1], items[2])) count++;
		else if (update(phoneBook, items[0], items[1], items[2])) count++;
	}
	return count;
}

module.exports.importFromCsv = importFromCsv;