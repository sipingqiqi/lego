'use strict';

function IdCardValidator () {

}

IdCardValidator.prototype.validate = function (value) {
    // 身份证位数不对
    if (!value) return;

    var len = value.length,
        area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
    
    var Y, JYM, S, M, ereg,
        idcard_array = new Array();
    idcard_array = value.split('');

    switch (len){
        
        case 15: 
            if(!area[value.substr(0,2)]){
                return "地址编码错误";
            }

            if ((parseInt(value.substr(6,2))+1900) % 4 == 0 || ((parseInt(value.substr(6,2))+1900) % 100 == 0 && (parseInt(value.substr(6,2))+1900) % 4 == 0 )){
                ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
            } else {
                ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
            }

            if(!ereg.test(value)) {
                return '身份证出生日期超出范围';
            }
        break;

        case 18: 
            if(!area[value.substr(0,2)]){
                return "地址编码错误";
            }

            if ( parseInt(value.substr(6,4)) % 4 == 0 || (parseInt(value.substr(6,4)) % 100 == 0 && parseInt(value.substr(6,4))%4 == 0 )){
                ereg=/^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9X]$/;//闰年出生日期的合法性正则表达式
            } else {
                ereg=/^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9X]$/;//平年出生日期的合法性正则表达式
            }

            if(ereg.test(value)){ //测试出生日期的合法性
                // 计算校验位
                S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                    + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                    + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                    + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                    + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                    + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                    + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                    + parseInt(idcard_array[7]) * 1
                    + parseInt(idcard_array[8]) * 6
                    + parseInt(idcard_array[9]) * 3 ;
                Y = S % 11;
                M = "F";
                JYM = "10X98765432";
                M = JYM.substr(Y,1);//判断校验位

                if (M == idcard_array[17]) {
                    return ''; //检测ID的校验位
                } else {
                    return '身份证号不符合规范';
                }
            } else {
                return '身份证出生日期超出范围';
            }
        break;

        default:
            return '身份证位数不对';
        break;
    }

    return '';
}

export default new IdCardValidator();

                // idCard = (''+idCard).toLocaleUpperCase();
                // var Errors = new Array(
                //     "",
                //     "身份证位数不对",
                //     "身份证出生日期超出范围",
                //     "身份证号不符合规范",
                //     "身份证地区非法"
                // );

                // var area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}

                // var Y, JYM, S, M;
                // var idcard_array = new Array();
                // idcard_array = idCard.split('');

                // //地区检验
                // if(area[parseInt(idCard.substr(0,2))] === null) {
                //     return Errors[4];
                // }

                // var ereg;
                // //身份号码位数及格式检验
                // switch(idCard.length){
                // case 15:
                //     if ((parseInt(idCard.substr(6,2))+1900) % 4 == 0 || ((parseInt(idCard.substr(6,2))+1900) % 100 == 0 && (parseInt(idCard.substr(6,2))+1900) % 4 == 0 )){
                //     ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;//测试出生日期的合法性
                //     } else {
                //     ereg=/^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;//测试出生日期的合法性
                //     }
                //     if(ereg.test(idCard)) {
                //         return Errors[0];
                //     }else{
                //         return Errors[2];
                //     }
                //     break;
                // case 18:
                //     //18位身份号码检测
                //     //出生日期的合法性检查
                //     //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
                //     //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
                //     if ( parseInt(idCard.substr(6,4)) % 4 == 0 || (parseInt(idCard.substr(6,4)) % 100 == 0 && parseInt(idCard.substr(6,4))%4 == 0 )){
                //     ereg=/^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9X]$/;//闰年出生日期的合法性正则表达式
                //     } else {
                //     ereg=/^[1-9][0-9]{5}[1-2][0-9]{3}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9X]$/;//平年出生日期的合法性正则表达式
                //     }
                //     if(ereg.test(idCard)){//测试出生日期的合法性
                //         //计算校验位
                //         S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                //     + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                //         + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                //         + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                //         + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                //         + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                //         + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                //         + parseInt(idcard_array[7]) * 1
                //         + parseInt(idcard_array[8]) * 6
                //         + parseInt(idcard_array[9]) * 3 ;
                //         Y = S % 11;
                //         M = "F";
                //         JYM = "10X98765432";
                //         M = JYM.substr(Y,1);//判断校验位
                //         if(M== idcard_array[17]){
                //         return Errors[0]; //检测ID的校验位
                //         }else{
                //         return Errors[3];
                //         }
                //     }else {
                //         return Errors[2];
                //     }
                //     break;
                //     default:
                //         return Errors[1];
                //         break;
                // }