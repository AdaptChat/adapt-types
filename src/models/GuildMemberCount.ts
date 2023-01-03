/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents member counts for a guild.
 */
export type GuildMemberCount = {
  /**
   * The number of members that are online. If this was part of a partial guild object, then
   * this will be `None`.
   */
  online?: number;
  /**
   * The total number of members in the guild.
   */
  total: number;
};

