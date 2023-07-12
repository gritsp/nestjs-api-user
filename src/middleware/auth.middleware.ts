import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class authMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.headers.authorization === "20scoops" ? next() : res.status(401).send("Unauthorized") ;
    
  }
}
