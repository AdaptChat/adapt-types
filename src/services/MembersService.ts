/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditClientMemberPayload } from '../models/EditClientMemberPayload';
import type { EditMemberPayload } from '../models/EditMemberPayload';
import type { Member } from '../models/Member';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MembersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get All Members
   * Get All Members
   *
   * Gets information of all members in a guild. You must be a member of the guild.
   * @param guildId
   * @returns Member Array of member objects
   * @throws ApiError
   */
  public getMembers(
    guildId: number,
  ): CancelablePromise<Array<Member>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/members',
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
   * Get Authenticated User as Member
   * Get Authenticated User as Member
   *
   * Gets information of the authenticated user as a member of a guild. You must be a member of the
   * guild.
   * @param guildId
   * @returns Member Member object
   * @throws ApiError
   */
  public getClientMember(
    guildId: number,
  ): CancelablePromise<Member> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/members/me',
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
   * Leave Guild
   * Leave Guild
   *
   * Leaves a guild. You must be a member of the guild beforehand. If you are the owner of the guild,
   * you must transfer ownership to another member before leaving.
   * @param guildId
   * @returns void
   * @throws ApiError
   */
  public leaveGuild(
    guildId: number,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/guilds/{guild_id}/members/me',
      path: {
        'guild_id': guildId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are the owner of the guild`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Edit Authenticated User as Member
   * Edit Authenticated User as Member
   *
   * Edits the authenticated user as a member of the given guild. You must be a member of the guild.
   * Parts of the payload require different permissions:
   * * The `nick` field requires the `CHANGE_NICKNAME` permission.
   * @param guildId
   * @param requestBody
   * @returns Member Member object after modifications
   * @throws ApiError
   */
  public editClientMember(
    guildId: number,
    requestBody: EditClientMemberPayload,
  ): CancelablePromise<Member> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/guilds/{guild_id}/members/me',
      path: {
        'guild_id': guildId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid token`,
        403: `You are not a member of the guild`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Get Member
   * Get Member
   *
   * Gets information of a member in a guild. You must be a member of the guild.
   * @param guildId
   * @param memberId
   * @returns Member Member object
   * @throws ApiError
   */
  public getMember(
    guildId: number,
    memberId: number,
  ): CancelablePromise<Member> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/members/{member_id}',
      path: {
        'guild_id': guildId,
        'member_id': memberId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are not a member of the guild`,
        404: `Guild or member not found`,
      },
    });
  }

  /**
   * Kick Member
   * Kick Member
   *
   * Kicks a member from a guild. You must be a member of the guild and have the `KICK_MEMBERS`
   * permission, and their highest role must be lower than yours.
   * @param guildId
   * @param memberId
   * @returns void
   * @throws ApiError
   */
  public kickMember(
    guildId: number,
    memberId: number,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/guilds/{guild_id}/members/{member_id}',
      path: {
        'guild_id': guildId,
        'member_id': memberId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are forbidden from editing the member. This can be because:
         * You are not a member of the guild.
         * You are missing permissions.`,
        404: `Guild or member not found`,
      },
    });
  }

  /**
   * Edit Member
   * Edit Member
   *
   * Edits information of a member in a guild. Parts of the payload require different permissions:
   * * The `nick` field requires the `MANAGE_NICKNAMES` permission.
   * * The `roles` field requires the `MANAGE_ROLES` permission.
   *
   * Returns the modified member object on success.
   * @param guildId
   * @param memberId
   * @param requestBody
   * @returns Member Member object after modifications
   * @throws ApiError
   */
  public editMember(
    guildId: number,
    memberId: number,
    requestBody: EditMemberPayload,
  ): CancelablePromise<Member> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/guilds/{guild_id}/members/{member_id}',
      path: {
        'guild_id': guildId,
        'member_id': memberId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid token`,
        403: `You are forbidden from editing the member. This can be because:
         * You are not a member of the guild.
         * You are missing permissions.`,
        404: `Guild or member not found`,
      },
    });
  }

}
