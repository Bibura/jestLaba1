const object = {
    firstName : "Yaroslav",
    lastName : "Trotskyi",
    introduce : function() {
    return ('Hello, Im ' + object.firstName + ' ' + object.lastName + '!');
}
}
module.exports = object;
