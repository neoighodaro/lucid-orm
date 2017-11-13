'use strict'

const Model = use('Model')

class Car extends Model {

	driver () {
    return this.belongsTo('App/Models/Driver')
  }
}

module.exports = Car
