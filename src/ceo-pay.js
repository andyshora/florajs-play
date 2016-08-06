import log from 'loglevel';

export class Viz {
  constructor(system, world) {
    log.debug('Viz constructor');

    this._system = system; // ref to the florajs system
    this._world = world;
    this._workers = [];

    this._createWorkers(50);
  }

  _createWorkers(numWorkers) {

    for (let i = 0; i < numWorkers; i++) {

      const worker = this._system.add('Walker', {
        color: [215,239,242],
        opacity: 1,
        width: 10,
        height: 10
      });

      this._workers.push(worker);

      // add an agent (a wealth coin) which seeks the worker
      this._system.add('Agent', {
        seekTarget: worker,
        color: [204,162,97],
        motorSpeed: 2,
        minSpeed: 1,
        maxSpeed: 10,
        width: 5,
        height: 5,
        borderWidth: 0,
        location: new Flora.Vector(this._world.width * 0.49, 0)
        /*sensors: [
          this._system.add('Sensor', {
            type: 'heat',
            displayRange: true,
            displayConnector: true,
            behavior: 'COWARD',
            borderWidth: 0
          })
        ]*/
      });

    }
  }
  _createCEO() {}
}

