import { Router } from 'express';

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
  const { name, email, password } = request.body

  response.json({ name, email, password })
})

export default usersRoutes