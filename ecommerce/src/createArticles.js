import { knex } from './db.js';

const articles = [
    {nombre: 'Nombre1', codigo: 'Codigo1', precio: 123.45, stock: 100},
    {nombre: 'Nombre2', codigo: 'Codigo2', precio: 223.45, stock: 200},
    {nombre: 'Nombre3', codigo: 'Codigo3', precio: 323.45, stock: 300},
    {nombre: 'Nombre4', codigo: 'Codigo4', precio: 423.45, stock: 400},
    {nombre: 'Nombre5', codigo: 'Codigo5', precio: 523.45, stock: 500}
]

export const createArticles = async function createArticles() {
    try {
        const response = await knex.insert(articles).from('articulos');
        console.log('Artículos Agregados 😁')
        console.log(response);
    } catch (error) {
        console.log(error)
    } finally {
        knex.destroy();
    }
}
