import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: false })
  data: string;
  
  @Prop({ required: false })
  dateCreated: number;
  
  @Prop({ required: false })
  dateEdit: number;

  @Prop({ required: true })
  activated: boolean;
  // @Prop({ required: true })
  // password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
