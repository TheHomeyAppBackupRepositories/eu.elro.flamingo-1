'use strict';

const DeviceTransmitter = require('../../lib/DeviceTransmitter');

module.exports = class extends DeviceTransmitter {
  async onRFInit() {
    await super.onRFInit();

    // The previous codebase had e exception for when the device did not have the capability 'alarm_smoke'.
    if (!this.getCapabilityValue('alarm_smoke')) {
      await this.addCapability('alarm_smoke')
        .catch(this.error);
    }

    // Disable the alarm if it was enabled
    this.setCapabilityValue('alarm_smoke', false)
      .catch(this.error);

    this.deviceTimeout = null;
  }

  async onUninit() {
    if (this.deviceTimeout) {
      this.homey.clearTimeout(this.deviceTimeout);
    }
    await super.onUninit();
  }

  async onCommandFirst() {
    if(this.hasCapability('alarm_smoke')) {
      await this.setCapabilityValue('alarm_smoke', true);
    }
  }

  async onCommand() {
    // As long as the command is received, reset the timeout, and start a new one.
    if (this.deviceTimeout) {
      this.homey.clearTimeout(this.deviceTimeout);
    }

    this.deviceTimeout = this.homey.setTimeout(() => {
      this.setCapabilityValue('alarm_smoke', false)
        .catch(this.error);
    }, 2000);
  }
};
