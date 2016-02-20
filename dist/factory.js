"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
  function Factory() {
    _classCallCheck(this, Factory);

    this.factories = {};
  }

  _createClass(Factory, [{
    key: "define",
    value: function define(name, object, definition) {
      this.factories[name] = {
        object: object,
        definition: definition
      };
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.factories[name];
    }
  }, {
    key: "build",
    value: function build(name, traits, options) {
      var definition = this.get(name).definition;
      var object = this.get(name).object;
      return definition.build(new object(), traits, options);
    }
  }]);

  return Factory;
}();

var FactoryPanda = new Factory();

var FactoryDefinition = function () {
  function FactoryDefinition() {
    _classCallCheck(this, FactoryDefinition);
  }

  _createClass(FactoryDefinition, null, [{
    key: "build",
    value: function build(instance) {
      var _this = this;

      var traits = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      traits.forEach(function (trait) {
        _this[trait](instance, options);
      });
    }
  }]);

  return FactoryDefinition;
}();

exports.FactoryPanda = FactoryPanda;
exports.FactoryDefinition = FactoryDefinition;

// module.exports = FactoryPanda;

