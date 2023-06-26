'use strict';

const Driver = require('../../lib/Driver');
const FlamingoElroRFSignal = require('../../lib/FlamingoElroRFSignal');

module.exports = class extends Driver {
  static SIGNAL = FlamingoElroRFSignal;

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('AB400DSS_remote:received')
      .registerRunListener(async (args, state) => {
        return (args.state === '1') === state.state
          && args.unit === state.unit;
      });
  }
};
