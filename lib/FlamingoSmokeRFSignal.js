'use strict';

const { RFSignal } = require('homey-rfdriver');

module.exports = class extends RFSignal {
  static FREQUENCY = '433';
  static ID = 'flamingo-smoke';

  static commandToDeviceData(command) {
    return {
      address: command.address,
    };
  }

  static payloadToCommand(payload) {
    if (payload.length === 24) {
      const address = String(payload.join(''));
      const id = address;
      return {
        address,
        id
      };
    }
    return null;
  }
};
