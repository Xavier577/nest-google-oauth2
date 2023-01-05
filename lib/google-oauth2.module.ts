import { DynamicModule, Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './google-oauth2.module-definition';
import { GoogleOAuth2Service } from './google-oauth2.service';

@Module({
  providers: [GoogleOAuth2Service],
  exports: [GoogleOAuth2Service],
})
export class GoogleOAuth2Module extends ConfigurableModuleClass {}
