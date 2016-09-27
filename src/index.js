// import { Viz as CeoViz } from './ceo-pay';
import chroma from 'chroma-js';

'use strict';

Flora.System.setup(function() {
  let world = this.add('World', {
    gravity: new Flora.Vector(),
    c: 0
  });

  let rColorScale = chroma.scale(['rgb(0, 157, 249)', 'rgb(0, 117, 185)']);

  const numCandidates = 20;
  const recruitersPerCandidate = 5;

  let cColors = chroma.scale(['rgb(255, 193, 7)', 'white']).mode('rgb').colors(numCandidates);

  for (let i = 0; i < numCandidates; i++) {

    let candidate = this.add('Walker', {
      maxSpeed: 5 + ~~(i / 2),
      color: chroma(cColors[i]).rgb()
    });

    // add a number of recruiters
    for (let j = 0; j < recruitersPerCandidate; j++) {
      this.add('Agent', {
        seekTarget: candidate,
        flocking: true,
        color: rColorScale(Math.random().toFixed(1)).rgb(),
        motorSpeed: 2,
        minSpeed: 1,
        maxSpeed: 10 + (Math.random() * 5),
        maxSteeringForce: 10 + (Math.random() * 5),
        width: 50,
        height: 50,
        borderWidth: 0,
        location: new Flora.Vector(Math.random() * 1000, Math.random() * 500)
      });
    }
  }


});

Flora.System.loop();
