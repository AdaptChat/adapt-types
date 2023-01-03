/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PermissionPair } from './PermissionPair';

/**
 * Represents a permission overwrite.
 */
export type PermissionOverwrite = (PermissionPair & {
  /**
   * The ID of the role or user this overwrite applies to. The model type can be extracted from
   * the ID.
   */
  id: number;
});

