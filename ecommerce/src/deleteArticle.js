import { knex } from './db.js';

export const deleteArticle = async function deleteArticle() {
    try {
        await knex.del().from('articulos').where('id',5);
        console.log('Artículo borrado 😫');
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}
