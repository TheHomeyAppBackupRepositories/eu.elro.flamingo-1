'use strict';

const DeviceTransmitter = require('../../lib/DeviceTransmitter');

module.exports = class extends DeviceTransmitter {
  async onCommandFirst({ state, unit, group }) {
    this.homey.flow
      .getDeviceTriggerCard('SF-501R:received')
      .trigger(this, {}, { state, unit, group })
      .catch(err => this.error(err));
  }
};
