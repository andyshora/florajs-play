import { Viz as CeoViz } from './ceo-pay';

'use strict';

Flora.System.setup(function() {
  let world = this.add('World', {
    gravity: new Flora.Vector(),
    c: 0
  });

  let viz1 = new CeoViz(this, world);

  // let walkers = [];

  /*for (let i = 0; i < 5; i++) {

    let walker = this.add('Walker');

    walkers.push(walker);

    this.add('Agent', {
      seekTarget: walker,
      motorSpeed: 2,
      minSpeed: 1,
      maxSpeed: 10,
      width: 20,
      height: 20,
      borderWidth: 0,
      location: new Flora.Vector(world.width * 0.49, 0),
      sensors: [
        this.add('Sensor', {
          type: 'heat',
          displayRange: true,
          displayConnector: true,
          behavior: 'COWARD',
          borderWidth: 0
        })
      ]
    });

  }*/




});

Flora.System.loop();
