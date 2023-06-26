
const { RFDriver } = require('homey-rfdriver');
const FlamingoRFSignal = require('./FlamingoRFSignal');

module.exports = class extends RFDriver {
  static SIGNAL = FlamingoRFSignal;
};
