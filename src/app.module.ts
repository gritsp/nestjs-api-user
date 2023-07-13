import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseConfigModule } from './mongoose.module';
import { authMiddleware } from './middleware/auth.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [MongooseConfigModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(authMiddleware)
      .forRoutes('users');
  }
}
