import { Inject, Injectable } from '@nestjs/common';
import { OAuth2Client, OAuth2ClientOptions } from 'google-auth-library';
import { GOOGLE_OAUTH_CLIENT_OPTIONS } from './google-oauth2.module-definition';

@Injectable()
export class GoogleOAuth2Service extends OAuth2Client {
  constructor(
    @Inject(GOOGLE_OAUTH_CLIENT_OPTIONS)
    private readonly options: OAuth2ClientOptions,
  ) {
    super(options);
  }
}
