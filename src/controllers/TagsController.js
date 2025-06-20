import knex from '../database/knex/index.js';

export default class TagsController {
  async index(request, response) {
    const user_id = request.user.id;

    const tags = await knex("tags")
      .where({ user_id })
      .groupBy("name")

    return response.json(tags);
  }
}