function update(phoneBook, phone, name, email) {
    let firstPattern = /^\+7-\d\d\d-\d\d\d-\d\d-\d\d$/;
    let secondPattern = /^\+7\d\d\d\d\d\d\d\d\d\d$/;
    if ((firstPattern.test(phone) || secondPattern.test(phone)) && name !== undefined && name !== '')
    {
        let number = phone.match(/\d/g).join('');
        for (let i = 0; i < phoneBook.length; i++) {
            if (phoneBook[i].phone.match(/\d/g).join('') !== number) continue;
            phoneBook[i].name = name;
            phoneBook[i].email = email;
            return true;
        }
    }
    return false;
}

module.exports.update = update;
