'use strict'

/**
 * Created on 2015/11/21
 * @author Wei Fei (@WeiFei365, weifei365@gmail.com)
 */


var CHART_ERROR = {
	'000000': [
		'中文',
		'English'
	]
};

/**
 * @desc 检错程序
 * @param {Boolean} isTrue  必需，决定是否报错
 * @param {Number}  errorId 必需，可以在浏览器控制台：CHART_ERROR[errorId] 来查看具体的报错说明信息
 * @param {String}  msg     可选，附带的报错说明
 * @param {Number}  I18N    可选，暂未使用，用来国际化将要输出的报错信息
 */
var Error = function (isTrue, errorId, msg, I18N) {
	I18N = 0;
	if (isTrue) {
		throw 'CHART_ERROR! Error ID: ' + errorId + '; Error Message: ' + msg;
	}
};

window && (window.CHART_ERROR = CHART_ERROR);
module.exports = Error;
