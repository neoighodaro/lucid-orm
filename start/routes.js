'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

const Garage = use('App/Models/Garage')
const Driver = use('App/Models/Driver')
const Car = 

Route.get('/', async () => {
        const Car_3 = await use('App/Models/Car').find(3)
        return Car_3.driver()
        })