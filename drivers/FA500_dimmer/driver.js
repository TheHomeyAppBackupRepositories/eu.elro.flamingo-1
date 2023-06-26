'use strict';

const Driver = require('../../lib/Driver');
const FlamingoPromaxDimmerRFSignal = require('../../lib/FlamingoPromaxDimmerRFSignal');

module.exports = class extends Driver {
  static SIGNAL = FlamingoPromaxDimmerRFSignal;
};
