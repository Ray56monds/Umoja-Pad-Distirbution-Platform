import { existsSync, mkdirSync } from 'fs';

const logDir = 'logs';

if (!existsSync(logDir)) {
  mkdirSync(logDir);
}
