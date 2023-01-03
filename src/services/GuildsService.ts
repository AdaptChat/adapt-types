/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateGuildPayload } from '../models/CreateGuildPayload';
import type { DeleteGuildPayload } from '../models/DeleteGuildPayload';
import type { EditGuildPayload } from '../models/EditGuildPayload';
import type { Guild } from '../models/Guild';
import type { PartialGuild } from '../models/PartialGuild';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GuildsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get All Guilds
   * Get All Guilds
   *
   * Fetches information for all guilds the user is a member of, abiding by the given query.
   * @returns Guild Array of guild objects
   * @throws ApiError
   */
  public getAllGuilds({
    channels,
    members,
    roles,
  }: {
    /**
     * Whether to resolve the guild's channels in the response.
     */
    channels?: boolean,
    /**
     * Whether to resolve the guild's members in the response.
     */
    members?: boolean,
    /**
     * Whether to resolve the guild's roles in the response.
     */
    roles?: boolean,
  }): CancelablePromise<Array<Guild>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds',
      query: {
        'channels': channels,
        'members': members,
        'roles': roles,
      },
      errors: {
        401: `Invalid token`,
      },
    });
  }

  /**
   * Create Guild
   * Create Guild
   *
   * Creates a new guild with the given payload.
   * @returns Guild Guild was successfully created
   * @throws ApiError
   */
  public createGuild({
    requestBody,
  }: {
    requestBody: CreateGuildPayload,
  }): CancelablePromise<Guild> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/guilds',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
      },
    });
  }

  /**
   * Get Guild
   * Get Guild
   *
   * Fetches information for the guild with the given ID. You must be a member of the guild to fetch
   * it.
   * @returns Guild Guild object
   * @throws ApiError
   */
  public getGuild({
    guildId,
  }: {
    guildId: number,
  }): CancelablePromise<Guild> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}',
      path: {
        'guild_id': guildId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are not a member of the guild`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Delete Guild
   * Delete Guild
   *
   * Deletes the guild with the given ID. You must be the owner of the guild to delete it.
   * @returns void
   * @throws ApiError
   */
  public deleteGuild({
    guildId,
    requestBody,
  }: {
    guildId: number,
    requestBody?: DeleteGuildPayload,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/guilds/{guild_id}',
      path: {
        'guild_id': guildId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid token or password`,
        403: `You are not the owner of the guild`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Edit Guild
   * Edit Guild
   *
   * Modifies details of the guild with the given ID. You must have `MANAGE_GUILD` permissions to
   * modify the guild. Returns the modified guild as a partial guild on success.
   * @returns PartialGuild Modified guild
   * @throws ApiError
   */
  public editGuild({
    guildId,
    requestBody,
  }: {
    guildId: number,
    requestBody: EditGuildPayload,
  }): CancelablePromise<PartialGuild> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/guilds/{guild_id}',
      path: {
        'guild_id': guildId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        401: `Invalid token`,
        403: `You do not have permission to modify the guild`,
        404: `Guild not found`,
      },
    });
  }

}
