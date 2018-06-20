'use strict';


/**
 * generate PAC code
 * By providing the customer's mobile number and their Onesys account number a PAC code for porting can be generated 
 *
 * mSISDN String OneSys MSISND (0 prefixed) eg. 0NNNNNNNNNN
 * skip Integer number of records to skip for pagination (optional)
 * accountNumber String OneSys Debtor number is also OneSys Account Number. eg. 0NNNNNNN (optional)
 * returns PACItem
 **/
exports.generatePAC = function(mSISDN,skip,accountNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expiryDate" : "2016-08-290T9:12:33.001Z",
  "pacExists" : true,
  "pacCode" : "TTG999999"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

