import { UserRole } from '@prisma/client';
import * as Joi from 'joi';

export const UpdateUserSchema = Joi.object({
  username: Joi.string().optional(),
  password: Joi.string().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  role: Joi.string()
    .valid(UserRole.ADMIN, UserRole.VOLUNTEER, UserRole.BENEFICIARY)
    .optional(),
});

export class UpdateUserDto {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: UserRole;
}
