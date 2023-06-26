'use strict';

const Driver = require('../../lib/Driver');
const FlamingoSmokeRFSignal = require('../../lib/FlamingoSmokeRFSignal');

module.exports = class extends Driver {
  static SIGNAL = FlamingoSmokeRFSignal;
};
