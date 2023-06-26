'use strict';

const Driver = require('../../lib/Driver');

module.exports = class extends Driver {
  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('SF-501R:received')
      .registerRunListener(async (args, state) => {

        //If the group button is pressed, set the unit t 'g' as defined in the flow
        const unit = state.group ? 'g' : state.unit;

        return (args.state === '1') === state.state
          && args.unit === unit;
      });
  }
};
