import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseConfigModule } from './mongoose.module';
import { authMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [MongooseConfigModule, UsersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .forRoutes('users');
  }
}
