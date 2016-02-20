let {FactoryBro, FactoryDefinition} = require('./factory')


var Parse = require('./libs/parse')
class User extends Parse.Object {
  constructor() {
    super('User');
  }
}

FactoryBro.define('user', User, class UserFactory extends FactoryDefinition {
  static build(instance, traits=[], options={}) {
    super.build(instance, traits, options);
    return instance
  }

  static valid(instance) {
    instance.set('valid', true)
  }

  static has_mobile(instance, options={}) {
    var cc = "+1"
    if( options.country_code ) {
      cc = options.country_code
    }
    instance.set('mobile', cc+"numbers")
  }
});
console.log(FactoryBro.build('user'))
console.log(FactoryBro.build('user', ['valid']))
console.log(FactoryBro.build('user', ['valid', 'has_mobile'], {country_code:'42'}))

// console.log(Sidebar);