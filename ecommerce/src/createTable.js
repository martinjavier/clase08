import { knex } from './db.js';

export const createTable = async function createTable() {
    try {
        const exist = await knex.schema.hasTable('articulos');
        if (!exist) {
            await knex.schema.createTable('articulos', (table) => {
                table.increments('id').primary().notNullable(),
                table.varchar('nombre', 15).notNullable,
                table.varchar('codigo', 10).notNullable,
                table.float('precio'),
                table.integer('stock')
            });
            console.log('🔥 Tabla creada 🔥');
        } else {
            console.log('La tabla ya existe 🥺');
        }
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy()
    }
}
