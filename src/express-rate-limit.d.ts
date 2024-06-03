declare module 'express-rate-limit' {
  import { Request, Response, NextFunction } from 'express';

  interface Options {
    windowMs?: number;
    max?: number;
    message?: string | Buffer | object;
    statusCode?: number;
    headers?: boolean;
    keyGenerator?: (req: Request, res: Response) => string;
    handler?: (req: Request, res: Response, next: NextFunction) => void;
    onLimitReached?: (
      req: Request,
      res: Response,
      optionsUsed: Options,
    ) => void;
    skipFailedRequests?: boolean;
    skipSuccessfulRequests?: boolean;
    skip?: (req: Request, res: Response) => boolean;
  }

  function rateLimit(
    options?: Options,
  ): (req: Request, res: Response, next: NextFunction) => void;

  export = rateLimit;
}
