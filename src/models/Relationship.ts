/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RelationshipType } from './RelationshipType';

/**
 * Represents a relationship that a user has with another user.
 */
export type Relationship = {
  /**
   * The ID of the user that this relationship is with.
   */
  id: number;
  type: RelationshipType;
};

