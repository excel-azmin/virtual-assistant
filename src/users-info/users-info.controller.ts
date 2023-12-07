import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BulkCreateUsersInfoArrayDto } from './dto/bulk-create-users-info.dto';
import { CreateUsersInfoDto } from './dto/create-users-info.dto';
import { UpdateUsersInfoDto } from './dto/update-users-info.dto';
import { UsersInfoService } from './users-info.service';

@Controller('users-info')
@ApiTags('Users Info')
export class UsersInfoController {
  constructor(private readonly usersInfoService: UsersInfoService) {}

  @Post()
  async create(@Body() createUsersInfoDto: CreateUsersInfoDto) {
    return await this.usersInfoService.create(createUsersInfoDto);
  }

  @Post('/bulk-add-users')
  async bulkAdd(@Body() createUsersInfoDto: BulkCreateUsersInfoArrayDto) {
    return await this.usersInfoService.bulkAdd(createUsersInfoDto);
  }

  @Get()
  async findAll() {
    return await this.usersInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersInfoService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUsersInfoDto: UpdateUsersInfoDto,
  ) {
    return await this.usersInfoService.update(id, updateUsersInfoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersInfoService.remove(id);
  }
}
