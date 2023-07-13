import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import config from '../config';

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.headers.authorization === config.passPhrase ? next() : res.status(401).send("Unauthorized") ;
    
  }
}
