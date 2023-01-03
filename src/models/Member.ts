/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MaybePartialUser } from './MaybePartialUser';

/**
 * Represents a member of a guild. Members are user objects associated with a guild.
 */
export type Member = (MaybePartialUser & {
  /**
   * The ID of the guild this member is in.
   */
  guild_id: number;
  /**
   * The time that the member joined the guild.
   */
  joined_at: string;
  /**
   * The nickname of the member. `None` if the member has no nickname.
   */
  nick?: string;
  roles?: Array<number>;
});

