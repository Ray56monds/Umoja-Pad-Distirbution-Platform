import { UserRole } from '@prisma/client';
import * as Joi from 'joi';

export const CreateUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  role: Joi.string()
    .valid(UserRole.ADMIN, UserRole.VOLUNTEER, UserRole.BENEFICIARY)
    .required(),
});

export class CreateUserDto {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}
