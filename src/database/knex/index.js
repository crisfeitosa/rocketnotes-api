import knexConfig from '../../../knexfile.js';
import knexPkg from 'knex';

const connection = knexPkg(knexConfig.development);

export default connection;