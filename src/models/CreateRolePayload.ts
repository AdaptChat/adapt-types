/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionPair } from './PermissionPair';

/**
 * Payload sent to create a new role in a guild.
 */
export type CreateRolePayload = {
  /**
   * The color of the role. Leave empty for the default/inherited color.
   */
  color?: number;
  /**
   * Whether the role should be hoisted.
   */
  hoisted?: boolean;
  /**
   * Whether the role should be mentionable by anyone.
   */
  mentionable?: boolean;
  /**
   * The name of the role.
   */
  name: string;
  permissions?: PermissionPair;
};

