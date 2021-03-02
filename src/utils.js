function getCorrectPhone(phone) {
    if (phone.match(/\+\d-\d{3}-\d{3}-\d{2}-\d{2}/) !== null) {
        return phone.replace(/-/g, '');
    } else if (phone.match(/\+\d{11}/) !== null) {
        return phone;
    } else {
        return null;
    }
}

module.exports.getCorrectPhone = getCorrectPhone; 