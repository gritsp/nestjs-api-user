import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find({activated:true}).exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({_id:id,activated:true}).exec();
  }

  async create(user: User): Promise<User> {
    user.dateCreated = Date.now();
    user.activated = true;
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async update(id: string, user: User): Promise<User> {
    user.dateEdit = Date.now();
    return this.userModel.findByIdAndUpdate(id, user, { new: true }).exec();
  }

  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndUpdate(id,{$set:{activated:false}}).exec();
  }
}
