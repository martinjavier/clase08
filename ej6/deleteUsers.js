import { knex } from './db.js';

async function deleteUsers() {
    try {
        await knex.del().from('usuarios').where('id',6);
        console.log('Usuario borrado 😫');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

deleteUsers();