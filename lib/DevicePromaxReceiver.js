'use strict';

const DeviceReceiver = require('./DeviceReceiver');

module.exports = class extends DeviceReceiver {
  static CAPABILITIES = {
    onoff({ value, data }) {
      return {
        ...data,
        count: this.increaseCounter(),
        state: !!value,
      }
    },
  };

  async onRFInit() {
    await super.onRFInit();

    //This count is user to make sure the socket accepts the send data.
    this.counter = 0;
  }

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', true);
    }
  }

  /**
   * Increase the counter for sending signals
   * Function used to change count to 0...3 so that the socket will recognize the payload.
   *
   * @returns {number|*}
   */
  increaseCounter() {
    this.counter++;
    if (this.counter > 3) {
      this.counter = 0;
    }
    return this.counter;
  }

  async onCommandMatch(command) {
    if (command === undefined || command === null) {
      return false;
    }
    const { address, unit } = this.getData();
    return address === command.address && unit === command.unit;
  }
};
