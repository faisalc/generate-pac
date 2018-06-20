'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.generatePAC = function generatePAC (req, res, next) {
  var mSISDN = req.swagger.params['MSISDN'].value;
  var skip = req.swagger.params['skip'].value;
  var accountNumber = req.swagger.params['accountNumber'].value;
  Default.generatePAC(mSISDN,skip,accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
