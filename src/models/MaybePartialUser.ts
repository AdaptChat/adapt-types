/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

/**
 * Potentially a partial user.
 */
export type MaybePartialUser = ({
  Full: User;
} | {
  /**
   * A user with only an ID.
   */
  Partial: {
    id: number;
  };
});

