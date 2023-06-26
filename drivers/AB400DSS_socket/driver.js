'use strict';

const DriverDipswitch = require('../../lib/DriverDipswitch');
const FlamingoElroRFSignal = require('../../lib/FlamingoElroRFSignal');

module.exports = class extends DriverDipswitch {
  static SIGNAL = FlamingoElroRFSignal;
}
