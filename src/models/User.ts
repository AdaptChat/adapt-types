/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserFlags } from './UserFlags';

/**
 * Represents a user account.
 *
 * A lot of information is stored in the user's flags, including whether or not the user is a bot
 * account.
 */
export type User = {
  /**
   * The URL of the user's avatar. This is `None` if the user has no avatar.
   */
  avatar?: string;
  /**
   * The URL of the user's banner. This is `None` if the user has no banner.
   */
  banner?: string;
  /**
   * The user's bio. This is `None` if the user has no bio.
   */
  bio?: string;
  /**
   * The discriminator of the user, between 0 and 9999.
   */
  discriminator: number;
  flags: UserFlags;
  /**
   * The snowflake ID of the user.
   */
  id: number;
  /**
   * The username of the user.
   */
  username: string;
};

