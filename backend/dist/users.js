"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    'maria@gmail.com': new User('maria@gmail.com', 'Maria', 'maria123'),
    'joao@gmail.com': new User('joao@gmail.com', 'João', 'joao456')
};
