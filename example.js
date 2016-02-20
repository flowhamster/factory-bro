let {FactoryBro, FactoryDefinition} = require('./factory')

var Backbone = require('backbone')
var Sidebar = Backbone.Model.extend({
  promptColor: function() {
    var cssColor = prompt("Please enter a CSS color:");
    this.set({color: cssColor});
  }
});

FactoryBro.define('user', Sidebar, class UserFactory extends FactoryDefinition {
  static build(instance, traits=[], options={}) {
    super.build(instance, traits, options);
    return instance
  }

  static valid(instance) {
    instance.set('valid', true)
  }
});
console.log(FactoryBro.build('user'))
console.log(FactoryBro.build('user', ['valid']))

// console.log(Sidebar);
