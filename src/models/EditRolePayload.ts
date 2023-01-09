/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionPair } from './PermissionPair';

/**
 * Payload sent to edit a role.
 */
export type EditRolePayload = {
  /**
   * The color of the role. Set to `null` for the default/inherited color, and leave empty
   * to leave it alone
   */
  color?: number | null;
  /**
   * Whether the role should be hoisted.
   */
  hoisted?: boolean;
  /**
   * Whether the role should be mentionable by anyone.
   */
  mentionable?: boolean;
  /**
   * The new name of the role, if any.
   */
  name?: string;
  permissions?: PermissionPair;
};

