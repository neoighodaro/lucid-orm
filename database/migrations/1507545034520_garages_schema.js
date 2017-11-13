'use strict'

const Schema = use('Schema')

class GaragesSchema extends Schema {
  up () {
    this.create('garages', (table) => {
      table.increments()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('garages')
  }
}

module.exports = GaragesSchema
