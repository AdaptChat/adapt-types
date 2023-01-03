/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionPair } from './PermissionPair';
import type { RoleFlags } from './RoleFlags';

/**
 * A role in a guild.
 */
export type Role = {
  /**
   * The color of the role. This is an integer between 0 and 16777215, or ``None`` if the role
   * has no color (in which case it inherits the color).
   */
  color?: number;
  flags: RoleFlags;
  /**
   * The ID of the guild this role belongs to.
   */
  guild_id: number;
  /**
   * The snowflake ID of the role.
   */
  id: number;
  /**
   * The name of the role.
   */
  name: string;
  permissions: PermissionPair;
  /**
   * The position of this role in the role hierarchy. The lower the number, the lower the role.
   * The default role always has a position of 0.
   *
   * The backend will try its best to keep all role positions unique, but on the event two
   * collide due to something such as a data race, then the true position of these roles will
   * not be predictable, and will likely be in the order of model creation.
   */
  position: number;
};

