import { knex } from './db.js';

async function updateUsers() {
    try {
        await knex.from('usuarios').update({name: 'Nombre7', lastname:'Apellido7'}).where('id',9);
        console.log('Información Actualizada');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

updateUsers();