import { knex } from './db.js';

export const readArticles = async function readArticles() {
    try {
        const users = await knex.select().from('articulos').orderBy('id','asc');
        console.log(users);
    } catch (error) {
        console.log(error);
    } finally {
        knex.destroy();
    }
}

readArticles();