'use strict';

function EmailValidator () {

}

EmailValidator.prototype.validate = function (value) {
    
    if (value && !/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value)) {
        return '{label}格式不正确';
    }

    return '';
}

export default new EmailValidator();