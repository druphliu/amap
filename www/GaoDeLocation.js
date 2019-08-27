var exec = require('cordova/exec');

var GaoDe = {
    getCurrentPosition:function (successFn,errorFn,parameter) {
        exec(successFn,errorFn,'GaoDeLocation','getCurrentPosition',parameter);
    }
};

module.exports = GaoDe;
