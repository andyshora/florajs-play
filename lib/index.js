// import { Viz as CeoViz } from './ceo-pay';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

'use strict';

Flora.System.setup(function () {
  var world = this.add('World', {
    gravity: new Flora.Vector(),
    c: 0
  });

  var rColorScale = _chromaJs2['default'].scale(['rgb(0, 157, 249)', 'rgb(0, 117, 185)']);

  var numCandidates = 20;
  var recruitersPerCandidate = 5;

  var cColors = _chromaJs2['default'].scale(['rgb(255, 193, 7)', 'white']).mode('rgb').colors(numCandidates);

  for (var i = 0; i < numCandidates; i++) {

    var candidate = this.add('Walker', {
      maxSpeed: 5 + i,
      color: (0, _chromaJs2['default'])(cColors[i]).rgb()
    });

    // add a number of recruiters
    for (var j = 0; j < recruitersPerCandidate; j++) {
      this.add('Agent', {
        seekTarget: candidate,
        flocking: true,
        color: rColorScale(Math.random().toFixed(1)).rgb(),
        motorSpeed: 2,
        minSpeed: 1,
        maxSpeed: 10 + Math.random() * 5,
        maxSteeringForce: 10 + Math.random() * 5,
        width: 50,
        height: 50,
        borderWidth: 0,
        location: new Flora.Vector(Math.random() * 1000, Math.random() * 500)
      });
    }
  }
});

Flora.System.loop();