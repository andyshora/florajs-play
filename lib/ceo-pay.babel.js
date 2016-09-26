import log from 'loglevel';

export class Viz {
  constructor(system, world) {
    log.debug('Viz constructor');

    this._system = system; // ref to the florajs system
    this._world = world;
    this._workers = [];
    this._dollars = [];

    this._ceoDollars = [];
    this._ceo = null;

    this._createWorkers(1);
    this._createCEO(500);
  }

  _createWorkers(numWorkers) {

    for (let i = 0; i < numWorkers; i++) {

      const dollar = this._system.add('Walker', {
        color: [97,204,162],
        opacity: 1,
        width: 3,
        height: 3
      });

      this._dollars.push(dollar);

      const worker = this._system.add('Agent', {
        seekTarget: dollar,
        color: [255,255,255],
        borderRadius: 100,
        motorSpeed: 2,
        minSpeed: 1,
        maxSpeed: 5,
        width: 10,
        height: 10,
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

      this._workers.push(worker);

    }

      // add an agent (a wealth coin) which seeks the worker

  }
  _createCEO(numDollars) {

    log.debug('_createCEO', numDollars);

    this._ceo = this._system.add('Walker', {
      color: [255,255,0],
      opacity: 1,
      width: 10,
      height: 10,
      maxSpeed: 0.5
    });

    for (let i = 0; i < numDollars; i++) {
      const ceoDollar = this._system.add('Agent', {
        seekTarget: this._ceo,
        borderRadius: 100,
        motorSpeed: 2,
        minSpeed: 1,
        maxSpeed: 5,
        borderWidth: 0,
        location: new Flora.Vector(this._world.width * 0.49, Math.random() * this._world.width),
        color: [97,204,162],
        opacity: 1,
        width: 3,
        height: 3
      });

      this._ceoDollars.push(ceoDollar);
    }
  }
}

