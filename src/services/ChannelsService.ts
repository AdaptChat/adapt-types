/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Channel } from '../models/Channel';
import type { CreateGuildChannelPayload } from '../models/CreateGuildChannelPayload';
import type { EditChannelPayload } from '../models/EditChannelPayload';
import type { GuildChannel } from '../models/GuildChannel';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ChannelsService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Channel
   * Get Channel
   *
   * Gets information about a channel given its ID. This includes guild channels, DM channels, and
   * group DM channels.
   * @returns Channel Channel information
   * @throws ApiError
   */
  public getChannel({
    channelId,
  }: {
    channelId: number,
  }): CancelablePromise<Channel> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/channels/{channel_id}',
      path: {
        'channel_id': channelId,
      },
      errors: {
        401: `Invalid token`,
        404: `Channel not found`,
      },
    });
  }

  /**
   * Delete Channel
   * Delete Channel
   *
   * Deletes a channel. For guild channels, you must have the `MANAGE_CHANNELS` permission to use
   * this endpoint. For standard DM channels, you must be a recipient of the DM. For group DM
   * channels, you must be the owner of the group DM.
   * @returns void
   * @throws ApiError
   */
  public deleteChannel({
    channelId,
  }: {
    channelId: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/channels/{channel_id}',
      path: {
        'channel_id': channelId,
      },
      errors: {
        401: `Invalid token`,
        403: `Missing permissions`,
        404: `Channel not found`,
      },
    });
  }

  /**
   * Edit Channel
   * Edit Channel
   *
   * Edits a channel with the given payload.
   * For guild channels, you must have the `MODIFY_CHANNELS` permission to use this endpoint.
   * @returns Channel Channel with updated details
   * @throws ApiError
   */
  public editChannel({
    channelId,
    requestBody,
  }: {
    channelId: number,
    requestBody: EditChannelPayload,
  }): CancelablePromise<Channel> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/channels/{channel_id}',
      path: {
        'channel_id': channelId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        401: `Invalid token`,
        403: `Missing permissions`,
        404: `Channel not found`,
      },
    });
  }

  /**
   * Get Guild Channels
   * Get Guild Channels
   *
   * Returns a list of all channels in the guild.
   * @returns GuildChannel Array of guild channels
   * @throws ApiError
   */
  public getGuildChannels({
    guildId,
  }: {
    guildId: number,
  }): CancelablePromise<Array<GuildChannel>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/channels',
      path: {
        'guild_id': guildId,
      },
      errors: {
        401: `Invalid token`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Create Guild Channel
   * Create Guild Channel
   *
   * Creates a new channel in the guild with the given payload. You must have the `MANAGE_CHANNELS`
   * permission to use this endpoint.
   * @returns Channel Channel was successfully created
   * @throws ApiError
   */
  public createGuildChannel({
    guildId,
    requestBody,
  }: {
    guildId: number,
    requestBody: CreateGuildChannelPayload,
  }): CancelablePromise<Channel> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/guilds/{guild_id}/channels',
      path: {
        'guild_id': guildId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        401: `Invalid token`,
        403: `Missing permissions`,
        404: `Guild not found`,
      },
    });
  }

}
