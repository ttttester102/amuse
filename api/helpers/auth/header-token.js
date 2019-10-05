module.exports = {


  friendlyName: 'Header token',


  description: '',


  fn: async function () {
    var md5 = require('md5');
    var moment = require('moment');


    return md5(`${sails.config.custom.app_key}${md5(moment(new Date()).format('DD-MM-YYYY'))}`);
  }


};

