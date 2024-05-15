'use strict'

const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

// {typeof import('@adonisjs/framework/src/Route/Manager')} 
const Route = use('Route')



Route.get('/', 'UserController.index')

Route.post('/add-user', 'UserController.addUser')

Route.post('/update-user', 'UserController.updateUser')

Route.post('/delete-user', 'UserController.deleteUser')