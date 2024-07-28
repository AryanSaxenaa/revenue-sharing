import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalespersonService } from './salesperson.service';
import { CreateSalespersonDto } from './dto/create-salesperson.dto';
import { UpdateSalespersonDto } from './dto/update-salesperson.dto';

@Controller('salesperson')
export class SalespersonController {
  constructor(private readonly salespersonService: SalespersonService) {}

  @Post()
  create(@Body() createSalespersonDto: CreateSalespersonDto) {
    return this.salespersonService.create(createSalespersonDto);
  }

  @Get()
  findAll() {
    return this.salespersonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salespersonService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalespersonDto: UpdateSalespersonDto) {
    return this.salespersonService.update(+id, updateSalespersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salespersonService.remove(+id);
  }
}
