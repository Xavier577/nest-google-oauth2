import { Test, TestingModule } from '@nestjs/testing';
import { GoogleOAuth2Service } from './google-oauth2.service';

describe('GoogleOauth2ClientService', () => {
  let service: GoogleOAuth2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleOAuth2Service],
    }).compile();

    service = module.get<GoogleOAuth2Service>(GoogleOAuth2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
