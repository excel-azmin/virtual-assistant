import { ApiProperty } from '@nestjs/swagger';
import { CreateUsersInfoDto } from './create-users-info.dto';

export class BulkCreateUsersInfoArrayDto {
  @ApiProperty({
    type: [CreateUsersInfoDto], // Specify the type as an array of BulkCreateUsersInfoDto
    example: [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        mobileNumber: '35659487845',
        address: '123 Main St',
        dateOfBirth: '1990-01-01',
      },
      // Add more objects if needed
    ],
  })
  users: CreateUsersInfoDto[];
}
