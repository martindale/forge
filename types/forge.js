'use strict';

const RPG = require('@fabric/rpg');

class Forge {
  constructor (settings = {}) {
    this.settings = {};
    this.rpg = new RPG(settings);
  }

  async start () {
    this.status = 'starting';
    console.log(`[FORGE]`, 'starting...');

    // TODO: do stuff

    this.status = 'started';
  }
}

module.exports = Forge;
