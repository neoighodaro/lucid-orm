'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

const Factory = use('Factory')

Factory.blueprint('App/Models/Garage', (faker) => {
  return {
    name: faker.first()
  }
})

Factory.blueprint('App/Models/Driver', (faker) => {
  return {
    name: faker.first()
  }
})

Factory.blueprint('App/Models/Car', (faker) => {
  return {
    brand: faker.first()
  }
})