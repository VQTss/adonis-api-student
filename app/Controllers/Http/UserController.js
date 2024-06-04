'use strict'
const Database = use('Database')
class UserController {
    async index ({ request, response }) {
        try {
            return await Database.table('users').select('*')
        } catch (error) {
            return error;
        }
    }

    async addUser ({ request, response }) {
        try {
            return await Database.table('users').insert(request.body);
        } catch (error) {
            return error;
        }
    }

    async deleteUser ({ request, response }) {
        try {
            return await Database.table('users').where('username', request.body.username).delete();
        } catch (error) {
            return error;
        }
    }

    async updateUser ({ request, response }) {
        try {
            return await Database.table('users').where('username', request.body.username).update(request.body);
        } catch (error) {
            return error;
        }
    }

    async login ({ request, response }) {
        try {
            const users=  await Database.table('users').where('username', request.body.username).first();
            if (users) {
                if (users.password === request.body.password) {
                    return {
                        users: users,
                        message: 'Login success',
                        status: 200
                    };
                }
            }
            return {
                message: 'User not found',
                status: 404
            }
        } catch (error) {
            return error;
        }
    }

}

module.exports = UserController
