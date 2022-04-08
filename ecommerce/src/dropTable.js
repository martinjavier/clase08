import { knex } from './db.js';

export const dropTable = async function dropTable() {
    try {
        const exist = await knex.schema.dropTableIfExists('articulos');
        console.log(exist);                  
    } catch (error) {
        console.log(error);
    } finally {
       knex.destroy()
    }
}




