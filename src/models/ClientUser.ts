/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Relationship } from './Relationship';
import type { User } from './User';

/**
 * Represents user info about the client. This has other information that is not available to the
 * public, such as emails, guilds, and relationships (friends and blocked users).
 */
export type ClientUser = (User & {
  /**
   * The associated email of the client's account.
   *
   * If the client is a bot, this is `None`.
   */
  email?: string;
  relationships: Array<Relationship>;
});

