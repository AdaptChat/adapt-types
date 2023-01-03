/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFlags } from './GuildFlags';
import type { GuildMemberCount } from './GuildMemberCount';

/**
 * Represents a guild with partial information, sometimes referred to as a server.
 */
export type PartialGuild = {
  /**
   * The URL of the banner of the guild.
   */
  banner?: string;
  /**
   * The description of the guild.
   */
  description?: string;
  flags: GuildFlags;
  /**
   * The URL of the icon of the guild.
   */
  icon?: string;
  /**
   * The snowflake ID of the guild.
   */
  id: number;
  member_count?: GuildMemberCount;
  /**
   * The name of the guild.
   */
  name: string;
  /**
   * The ID of the owner of the guild.
   */
  owner_id: number;
  /**
   * The vanity URL code of the guild. This solely includes the code, not the full URL.
   * This is `None` if the guild does not have a vanity URL.
   *
   * Guilds have the ability to set vanity URLs once they surpass 100 non-bot members *and* have
   * their visibility set to public. The vanity URL code can be between 3 and 32 characters long.
   */
  vanity_url?: string;
};

