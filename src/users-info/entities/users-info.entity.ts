import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class UsersInfo extends Document {
  @Prop({ isRequired: true })
  firstName: string;
  @Prop({ isRequired: true })
  lastName: string;
  @Prop()
  fullName: string;
  @Prop()
  email: string;
  @Prop()
  mobileNumber: string;
  @Prop({ type: String })
  address: string;
  @Prop({ type: String })
  dateOfBirth: string;
}

export const UserInfoSchema = SchemaFactory.createForClass(UsersInfo);

UserInfoSchema.pre<UsersInfo>('save', function (next) {
  this.fullName = this.firstName + this.lastName;
  next();
});
