import { IsNumber, IsOptional, IsPositive, IsString, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 50)
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  @IsPositive()
  price: number;
  @IsNumber()
  @IsPositive()
  revenueSplit: number;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  businessId: number;
  @IsNumber()
  userId: number;
}
