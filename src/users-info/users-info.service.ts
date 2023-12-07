import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BulkCreateUsersInfoArrayDto } from './dto/bulk-create-users-info.dto';
import { CreateUsersInfoDto } from './dto/create-users-info.dto';
import { UpdateUsersInfoDto } from './dto/update-users-info.dto';
import { UsersInfo } from './entities/users-info.entity';

@Injectable()
export class UsersInfoService {
  constructor(
    @InjectModel(UsersInfo.name)
    private usersInfoModel: Model<UsersInfo>,
  ) {}

  async create(createUsersInfoDto: CreateUsersInfoDto): Promise<UsersInfo> {
    const user = new this.usersInfoModel(createUsersInfoDto);

    return await user.save();
  }

  async bulkAdd(createUsersInfoDto: BulkCreateUsersInfoArrayDto) {
    return await this.usersInfoModel.insertMany(createUsersInfoDto.users);
  }

  async findAll() {
    return await this.usersInfoModel.find();
  }

  async findOne(id: string) {
    return await this.usersInfoModel.findById(id);
  }

  async update(id: string, updateUsersInfoDto: UpdateUsersInfoDto) {
    return await this.usersInfoModel.findByIdAndUpdate(id, updateUsersInfoDto);
  }

  async remove(id: string) {
    return await this.usersInfoModel.findByIdAndDelete(id);
  }
}
