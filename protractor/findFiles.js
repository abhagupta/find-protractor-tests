fs = require('fs');

var protractor_configuration = require("./conf").config;
require('songbird')

var protractorConfigFilePath = process.argv[2] || protractor_configuration.specs;
console.log('File path retrieved: '+ protractorConfigFilePath);

 fs.promise.readdir(protractorConfigFilePath).then(function(result){
 	 console.log(" File List retrieved: " + result);
 });