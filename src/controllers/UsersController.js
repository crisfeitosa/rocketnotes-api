import bcryptjs from 'bcryptjs';
import AppError from '../utils/AppError.js';
import sqliteConnection from '../database/sqlite/index.js'

export default class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if (checkUserExists){
      throw new AppError("Este e-mail já está em uso.")
    }

    const hashedPassword = await bcryptjs.hash(password, 8)

    await database.run(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    )

    return response.status(201).json()
  }
}
