'use strict';

function TelValidator () {

}

TelValidator.prototype = {
    validate: function (value) {

        // 当字符串非空，并且格式不正确时，返回错误提示。
        // 校验规则：11位，纯数字，13、14、15、17、18 开头
        if (value && !/^1[34578]{1}[0-9]{9}$/.test(value)) {
            return '{label}格式不正确';
        }
        
        // 当字符串为空，或者格式正确时，返回空字符串，表示验证通过。
        return '';
    }
}

export default new TelValidator();