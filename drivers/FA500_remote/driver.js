'use strict';

const Driver = require('../../lib/Driver');
const FlamingoPromaxRFSignal = require('../../lib/FlamingoPromaxRFSignal');

module.exports = class extends Driver {
  static SIGNAL = FlamingoPromaxRFSignal;

  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('FA500_remote:received')
      .registerRunListener(async (args, state) => {
        return (args.state === '1') === state.state
          && Number(args.unit) === state.unit;
      });
  }
};
