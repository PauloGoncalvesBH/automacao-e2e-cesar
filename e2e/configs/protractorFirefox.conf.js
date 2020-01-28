module.exports.config = require('./createProtractorConf.js.js')({
  capabilities: {
    browserName: 'firefox',
    marionette: true
  }
});
