"use strict";

class Factory {
  constructor() {
    this.factories = {}
  }

  define(name, object, definition) {
    this.factories[name] = {
      object: object,
      definition: definition
    }
  }

  get(name) {
    return this.factories[name]
  }

  build(name, traits, options) {
    var definition = this.get(name).definition;
    var object = this.get(name).object
    return definition.build(new object(), traits, options)
  }

}

let FactoryPanda = new Factory()

class FactoryDefinition {
  static build(instance, traits=[], options={}) {
    traits.forEach( (trait) => {
      this[trait](instance, options)
    })
  }
}

export { FactoryPanda, FactoryDefinition }

// module.exports = FactoryPanda;
