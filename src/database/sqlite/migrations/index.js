import sqliteConnection from '../index.js'
import { createUsers } from './createUsers.js'

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('')

  const database = await sqliteConnection();
  try {
    await database.exec(schemas);
  } catch (error) {
    console.error(error);
  }
}

export default migrationsRun;