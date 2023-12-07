import { ApiProperty } from '@nestjs/swagger';

export class CreateUsersInfoDto {
  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;

  @ApiProperty({ example: 'john@example.com' })
  email: string;

  @ApiProperty({ example: '35659487845' })
  mobileNumber: string;

  @ApiProperty({ example: '123 Main St' })
  address: string;

  @ApiProperty({ example: '1990-01-01' })
  dateOfBirth: string;
}
