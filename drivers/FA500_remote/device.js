'use strict';

const DeviceTransmitter = require('../../lib/DeviceTransmitter');

module.exports = class extends DeviceTransmitter {
  async onCommandFirst({ state, unit }) {
    this.homey.flow
      .getDeviceTriggerCard('FA500_remote:received')
      .trigger(this, {}, { state, unit })
      .catch(err => this.error(err));
  }
};
