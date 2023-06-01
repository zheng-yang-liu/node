// 路由文件
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var url = require('url');
module.exports = function (req, res) {
    var urlObj = url.parse(req.url, true);
    req.require = urlObj.query;
    console.log("我的路径是:", urlObj.query);

}