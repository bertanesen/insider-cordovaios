
var exec = require('cordova/exec');

var PLUGIN_NAME = 'InsiderCordova';

var InsiderCordova = {
  tagEvent: function(event) {
    exec(cb, null, PLUGIN_NAME, 'tagEvent', [event]);
  }
};


module.exports = InsiderCordova;
