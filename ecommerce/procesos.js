import { knex } from './db.js';

const articles = [
    {nombre: 'Nombre1', codigo: 'Codigo1', precio: 123.45, stock: 100},
    {nombre: 'Nombre2', codigo: 'Codigo2', precio: 223.45, stock: 200},
    {nombre: 'Nombre3', codigo: 'Codigo3', precio: 323.45, stock: 300},
    {nombre: 'Nombre4', codigo: 'Codigo4', precio: 423.45, stock: 400},
    {nombre: 'Nombre5', codigo: 'Codigo5', precio: 523.45, stock: 500}
]

async function batchProcess() {
    // Drop Table
    try {
        const exist = await knex.schema.dropTableIfExists('articulos');
        console.log(exist);                  
    } catch (error) {
        console.log(error);
    }
    // Table Creation
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
    }
    // Insert Articles
    try {
        const response = await knex.insert(articles).from('articulos');
        console.log('Artículos Agregados 😁')
        console.log(response);
    } catch (error) {
        console.log(error)
    } 
    // Read Articles
    try {
        const users = await knex.select().from('articulos').orderBy('id','asc');
        console.log(users);
    } catch (error) {
        console.log(error);
    }
    // Delete Article
    try {
        await knex.del().from('articulos').where('id',5);
        console.log('Artículo borrado 😫');
    } catch (error) {
        console.log(error);
    }
    // Update Article
    try {
        await knex.from('articulos').update({stock: 0}).where('id',2);
        console.log('Información Actualizada');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}


// Llamar al batch
batchProcess();