import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUsersInfoDto } from './create-users-info.dto';

export class UpdateUsersInfoDto extends PartialType(CreateUsersInfoDto) {
  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty({ example: '123 Main St' })
  address: string;

  @ApiProperty({ example: '1990-01-01' })
  dateOfBirth: string;
}
