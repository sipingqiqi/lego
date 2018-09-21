'use strict';

function NumberValidator () {

}

NumberValidator.prototype = {
    validate: function (value) {

        // 当字符串非空，并且格式不正确时，返回错误提示。
        if (value && !/^[0-9]+$/.test(value)) {
            return '{label}只能输入数字';
        }
        
        // 当字符串为空，或者格式正确时，返回空字符串，表示验证通过。
        return '';
    }
}

export default new NumberValidator();