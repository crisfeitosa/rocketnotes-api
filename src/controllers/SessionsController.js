import knex from '../database/knex/index.js';
import AppError from '../utils/AppError.js';

export default class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex('users').where({ email }).first();

    if (!user) {
      throw new AppError('Email e/ou senha incorreta', 401);
    }

    return response.json(user);
  }
}