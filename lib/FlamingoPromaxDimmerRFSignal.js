'use strict';

const PromaxPayload = require('./promax/PromaxPayload');
const FlamingoPromaxDimmerRFSignal = require('./FlamingoPromaxRFSignal');

module.exports = class extends FlamingoPromaxDimmerRFSignal {
  static createPairCommand() {
    const data = {
      address: Math.round(Math.random() * 65535),
      count: 0,
      unit: Math.round(Math.random() * 3),
      state: 1,
    };
    data.id = `${data.address}:${data.unit}`;
    return data;
  }
};
