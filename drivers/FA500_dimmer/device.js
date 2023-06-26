'use strict';

const DevicePromaxReceiver = require('../../lib/DevicePromaxReceiver');

module.exports = class extends DevicePromaxReceiver {
  static CAPABILITIES = {
    onoff({ value, data }) {
      // For dimmers, always use the value as number
      if (value === true) {
        value = this.getCapabilityValue('dim');
      }
      else {
        value = 0;
      }

      return {
        ...data,
        count: this.increaseCounter(), // Function used to change count to 0...3 so that the socket will recognize the payload.
        state: value,
      };
    },
    async dim({ value, data }) {
      // Turn off entirely when dim value is zero
      await this.setCapabilityValue('onoff', value !== 0);

      return {
        ...data,
        count: this.increaseCounter(), // Function used to change count to 0...3 so that the socket will recognize the payload.
        state: value,
      };
    },
  };

  async onAdded() {
    await this.setCapabilityValue('onoff', false);
    await this.setCapabilityValue('dim', 1);
  }
};
