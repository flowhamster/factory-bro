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
    instance.set('foo', 'boo')
    super.build(instance, traits, options);
    console.log(instance.get('foo'));
    return instance
  }
});
console.log(FactoryBro.build('user'))

// console.log(Sidebar);
