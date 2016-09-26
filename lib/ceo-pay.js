'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _loglevel = require('loglevel');

var _loglevel2 = _interopRequireDefault(_loglevel);

var Viz = (function () {
  function Viz(system, world) {
    _classCallCheck(this, Viz);

    _loglevel2['default'].debug('Viz constructor');

    this._system = system; // ref to the florajs system
    this._world = world;
    this._workers = [];
    this._dollars = [];

    this._ceoDollars = [];
    this._ceo = null;

    this._createWorkers(1);
    this._createCEO(500);
  }

  _createClass(Viz, [{
    key: '_createWorkers',
    value: function _createWorkers(numWorkers) {

      for (var i = 0; i < numWorkers; i++) {

        var dollar = this._system.add('Walker', {
          color: [97, 204, 162],
          opacity: 1,
          width: 3,
          height: 3
        });

        this._dollars.push(dollar);

        var worker = this._system.add('Agent', {
          seekTarget: dollar,
          color: [255, 255, 255],
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
  }, {
    key: '_createCEO',
    value: function _createCEO(numDollars) {

      _loglevel2['default'].debug('_createCEO', numDollars);

      this._ceo = this._system.add('Walker', {
        color: [255, 255, 0],
        opacity: 1,
        width: 10,
        height: 10,
        maxSpeed: 0.5
      });

      for (var i = 0; i < numDollars; i++) {
        var ceoDollar = this._system.add('Agent', {
          seekTarget: this._ceo,
          borderRadius: 100,
          motorSpeed: 2,
          minSpeed: 1,
          maxSpeed: 5,
          borderWidth: 0,
          location: new Flora.Vector(this._world.width * 0.49, Math.random() * this._world.width),
          color: [97, 204, 162],
          opacity: 1,
          width: 3,
          height: 3
        });

        this._ceoDollars.push(ceoDollar);
      }
    }
  }]);

  return Viz;
})();

exports.Viz = Viz;