'use strict'

/**
 * Created on 2015/11/21
 * @author Wei Fei (@WeiFei365, weifei365@gmail.com)
 */


var core = require('../utils/core.js');


var OPTIONS = {}；

/**
 * @desc 检查并构建一份完整的 options 配置，减少在 chart 中对其的判断操作
 * @param  {Object} custom 可选，用户的自定义配置
 * @return {Object}        一份完整的 options，直接通过 KEY 访问，可以保证不会报错
 */
var buildOptions = function (custom) {
	return custom;
};

module.exports = buildOptions;
