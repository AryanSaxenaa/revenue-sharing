import { Injectable } from '@nestjs/common';
import { CreateSalespersonDto } from './dto/create-salesperson.dto';
import { UpdateSalespersonDto } from './dto/update-salesperson.dto';

@Injectable()
export class SalespersonService {
  create(createSalespersonDto: CreateSalespersonDto) {
    return 'This action adds a new salesperson';
  }

  findAll() {
    return `This action returns all salesperson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesperson`;
  }

  update(id: number, updateSalespersonDto: UpdateSalespersonDto) {
    return `This action updates a #${id} salesperson`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesperson`;
  }
}
