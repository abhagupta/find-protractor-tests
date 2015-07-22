# find-protractor-tests

This will read configuration from conf.js from `specs` property. `conf.js` file is the configuration file for protractor. It also may have a `suite` property instead of `specs` which will accept an array of files.

To run :

- fork the repo
- clone repo
- run `npm install`. This should download protractor (even though we are not going to use protractor)
- run `node protractor/findFiles.js` OR `node protractor/findFiles.js client/test/integration/` to get an output like following
 ```
  File path retrieved: client/test/integration
  File List retrieved: test1.js,test2.js
 ```
TO-DO: support for checking whether `specs` is a file or a directory. Right now it assumes the value is directory