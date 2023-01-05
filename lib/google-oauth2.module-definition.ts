import { ConfigurableModuleBuilder } from '@nestjs/common';
import { OAuth2ClientOptions } from 'google-auth-library';

export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN: GOOGLE_OAUTH_CLIENT_OPTIONS,
} = new ConfigurableModuleBuilder<OAuth2ClientOptions>().build();
