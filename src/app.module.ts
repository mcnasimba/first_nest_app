import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BoobmarkModule } from './boobmark/boobmark.module';
import { UserController } from './user/user-controller';
@Module({
  imports: [AuthModule, UserModule, BoobmarkModule],
  controllers:[UserController]

})
export class AppModule {}
