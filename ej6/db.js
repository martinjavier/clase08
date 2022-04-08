import { config } from './config.js';
console.log(config);

//import { config } from './configSQLite.js';

import _knex from 'knex';

export const knex = _knex(config);

/*
const knex = require('knex')(config);
console.log(config);

async function db() {
    try {
        const personas = await knex.select('id','nombres').from('personas').where('id',1)
        console.log(personas)
    } catch (error) {
        console.log(error)
    } finally{
        knex.destroy();
    }
}

db();
*/
