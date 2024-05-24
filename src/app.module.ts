import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { ControllersModule } from './infrastructure/controllers/controllers.module';

@Module({
  imports: [ExceptionsModule, ControllersModule, EnvironmentConfigModule],
})
export class AppModule {}
