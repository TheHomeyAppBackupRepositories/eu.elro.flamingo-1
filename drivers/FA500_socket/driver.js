'use strict';

const Driver = require('../../lib/Driver');
const FlamingoPromaxRFSignal = require('../../lib/FlamingoPromaxRFSignal');

module.exports = class extends Driver {
  static SIGNAL = FlamingoPromaxRFSignal;
};
