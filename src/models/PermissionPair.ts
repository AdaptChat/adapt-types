/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Permissions } from './Permissions';

/**
 * Represents a pair of permissions, one representing allowed permissions and the other
 * representing denied permissions. This is so that any permission that is represented as
 * "neutral" where it is neither allowed or denied remains easily overwritten by lower
 * roles or members.
 */
export type PermissionPair = {
  allow: Permissions;
  deny: Permissions;
};

