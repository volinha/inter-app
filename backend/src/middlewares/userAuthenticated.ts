import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

import AppError from '../shared/error/AppError';

interface TokenPayload {
    firstName: string;
    lastName: string;
    iat: number;
    exp: number;
    sub: string;
}

export default function userAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
): void {
    //Validar token JWT

    const authHeader = req.headers.authorization;

    if(!authHeader){
        throw new AppError('JWT not sent!', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authConfig.jwt.secret);

        const { sub, firstName, lastName } = decoded as TokenPayload;

        req.user = {
            id: sub,
            firstName,
            lastName
        };

        return next();
    } catch {
        throw new AppError('Invalid JWT token!', 401);
    }
}