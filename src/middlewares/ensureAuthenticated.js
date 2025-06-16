import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';
import authConfig from '../configs/auth.js';

export default function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token não encontrado', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = jwt.verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id),
    };

    return next();
  } catch {
    throw new AppError('JWT token inválido', 401);
  }
}