import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class CreateBusinessDto {
  @Length(2, 20)
  @IsString()
  name: string;
  @Length(2)
  @IsString()
  contactDetails: string;
}

enum UserRole {
  USER = 'USER',
  BUSINESS_OWNER = 'BUSINESS_OWNER',
  SALESPERSON = 'SALESPERSON',
}
export class updateRoleToBusiness {
  @IsOptional()
  @IsEnum(UserRole)
  role: UserRole;
}
