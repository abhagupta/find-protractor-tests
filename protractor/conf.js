exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        specs: ['../client/test/integration/*.js'],
        onPrepare: function() {
            browser.getCapabilities().then(function(capabilities) {
                    // save report to corresponding browser folder
                    var bn = capabilities.caps_.browserName;
                    console.log("Browser Name :" + bn);
                }
            )}
        };
