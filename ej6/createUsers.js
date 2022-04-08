import { knex } from './db.js';

const users = [
    {name: 'Name1', lastname: 'Last1', email: 'n1@n.com'},
    {name: 'Name2', lastname: 'Last2', email: 'n2@n.com'},
    {name: 'Name3', lastname: 'Last3', email: 'n3@n.com'},
    {name: 'Name4', lastname: 'Last4', email: 'n4@n.com'},
    {name: 'Name5', lastname: 'Last5', email: 'n5@n.com'},
    {name: 'Name6', lastname: 'Last6', email: 'n6@n.com'},
]

async function createUsers() {
    try {
        const response = await knex.insert(users).from('usuarios');
        console.log('Usuarios Agregados 😁')
        console.log(response);
    } catch (error) {
        console.log(error)
    } finally {
        knex.destroy();
    }
}

createUsers();