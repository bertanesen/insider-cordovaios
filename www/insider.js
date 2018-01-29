
var exec = require('cordova/exec');

var PLUGIN_NAME = 'InsiderCordova';

var InsiderCordova = {
  tagEvent: function(event, callback) {
    exec(callback, null, PLUGIN_NAME, 'tagEvent', [event]);
  }
};


module.exports = InsiderCordova;
