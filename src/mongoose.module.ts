import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
console.log(process.env.MONGODB_URI);
@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin_mongodb:mongo1234@cluster0.afh36.mongodb.net/exam_20scoops"),
  ],
})
export class MongooseConfigModule {}
