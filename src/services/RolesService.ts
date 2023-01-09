/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRolePayload } from '../models/CreateRolePayload';
import type { EditRolePayload } from '../models/EditRolePayload';
import type { Role } from '../models/Role';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RolesService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get All Roles
   * Get All Roles
   *
   * Fetches information for all roles in the guild with the given ID.
   * You must be a member of the guild.
   * @param guildId
   * @returns Role Array of role objects
   * @throws ApiError
   */
  public getRoles(
    guildId: number,
  ): CancelablePromise<Array<Role>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/roles',
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
   * Create Role
   * Create Role
   *
   * Creates a role in the guild with the given guild ID. You must have the `MANAGE_ROLES` permission
   * to create roles.
   * @param guildId
   * @param requestBody
   * @returns Role Role object
   * @throws ApiError
   */
  public createRole(
    guildId: number,
    requestBody: CreateRolePayload,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/guilds/{guild_id}/roles',
      path: {
        'guild_id': guildId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid token`,
        403: `You are forbidden from creating the roles. This can be because:
         * You are not a member of the guild.
         * You do not have the \`MANAGE_ROLES\` permission in the guild.
         * You are creating a role that allows or denies permissions you do not have.`,
        404: `Guild not found`,
      },
    });
  }

  /**
   * Get Role
   * Get Role
   *
   * Fetches information for the role with the given ID in the given guild. You must be a member of
   * the guild the role belongs to.
   * @param guildId
   * @param roleId
   * @returns Role Role object
   * @throws ApiError
   */
  public getRole(
    guildId: number,
    roleId: number,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/guilds/{guild_id}/roles/{role_id}',
      path: {
        'guild_id': guildId,
        'role_id': roleId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are not a member of the guild`,
        404: `Guild or role not found`,
      },
    });
  }

  /**
   * Delete Role
   * Delete Role
   *
   * Deletes the role with the given ID in the given guild. You must have the `MANAGE_ROLES`
   * permission, the role cannot be managed, and the role must be lower than your highest role.
   * @param guildId
   * @param roleId
   * @returns void
   * @throws ApiError
   */
  public deleteRole(
    guildId: number,
    roleId: number,
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/guilds/{guild_id}/roles/{role_id}',
      path: {
        'guild_id': guildId,
        'role_id': roleId,
      },
      errors: {
        401: `Invalid token`,
        403: `You are forbidden from deleting the role. This can be because:
         * You are not a member of the guild.
         * You do not have the \`MANAGE_ROLES\` permission in the guild.
         * The role is managed.
         * The role is higher than your highest role.`,
      },
    });
  }

  /**
   * Edit Role
   * Edit Role
   *
   * Modifies the role with the given ID in the given guild. You must have the `MANAGE_ROLES`
   * permission, and the role must be lower than your highest role.
   * @param guildId
   * @param roleId
   * @param requestBody
   * @returns Role Modified role object
   * @throws ApiError
   */
  public editRole(
    guildId: number,
    roleId: number,
    requestBody: EditRolePayload,
  ): CancelablePromise<Role> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/guilds/{guild_id}/roles/{role_id}',
      path: {
        'guild_id': guildId,
        'role_id': roleId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid token`,
        403: `You are forbidden from editing the role. This can be because:
         * You are not a member of the guild.
         * You do not have the \`MANAGE_ROLES\` permission in the guild.
         * You are editing a role that allows or denies permissions you do not have.
         * You are editing a role that is higher than your highest role.
        `,
        404: `Guild or role not found`,
      },
    });
  }

}
