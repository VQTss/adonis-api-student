'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoleUsersSchema extends Schema {
  up () {
    this.createIfNotExists('role_users', (table) => {
      table.increments()
      table.string('value')
      table.integer('role_id').unsigned().references('id').inTable('role_users')
      table.timestamps()
    })
  }

  down () {
    this.drop('role_users')
  }
}

module.exports = RoleUsersSchema
