/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AuthService } from './services/AuthService';
import { ChannelsService } from './services/ChannelsService';
import { GuildsService } from './services/GuildsService';
import { MembersService } from './services/MembersService';
import { RolesService } from './services/RolesService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class Adapt {

  public readonly auth: AuthService;
  public readonly channels: ChannelsService;
  public readonly guilds: GuildsService;
  public readonly members: MembersService;
  public readonly roles: RolesService;
  public readonly users: UsersService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://adapt.lambdabot.cf',
      VERSION: config?.VERSION ?? '0.1.0',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.auth = new AuthService(this.request);
    this.channels = new ChannelsService(this.request);
    this.guilds = new GuildsService(this.request);
    this.members = new MembersService(this.request);
    this.roles = new RolesService(this.request);
    this.users = new UsersService(this.request);
  }
}

