import { knex } from './db.js';

export const updateArticle = async function updateArticle() {
    try {
        await knex.from('articulos').update({stock: 0}).where('id',2);
        console.log('Información Actualizada');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}
