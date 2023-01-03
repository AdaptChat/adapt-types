/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildChannelInfo } from './GuildChannelInfo';
import type { PermissionOverwrite } from './PermissionOverwrite';

/**
 * Represents a channel in a guild.
 */
export type GuildChannel = (GuildChannelInfo & {
  /**
   * The ID of the guild that this channel is in.
   */
  guild_id: number;
  /**
   * The ID of the channel.
   */
  id: number;
  /**
   * The name of the channel.
   */
  name: string;
  overwrites: Array<PermissionOverwrite>;
  /**
   * The ID of the parent category of the channel. This is `None` if the channel is not in a
   * category.
   */
  parent_id?: number;
  /**
   * The position of the channel in the channel list. A lower value means appearing "higher" in
   * the UI, basically think of this as a 0-indexed listing of the channels from top-to-bottom.
   *
   * Positions are scoped per category, and categories have their own positions. Channels that
   * lack a category will be shown above all categories. This is because no channels can be
   * displayed in between or after categories - in the UI all non-category channels are displayed
   * above any other category channels.
   *
   * For example:
   *
   * ```text
   * [0] text-channel
   * [1] voice-channel
   * [2] another-text-channel
   * [0] Category
   * [0] another-text-channel
   * [1] another-voice-channel
   * [0] Another Category
   * [1] nested-voice-channel
   * [2] nested-voice-channel-2
   * [1] Yet Another Category
   * [0] another-text-channel
   * ```
   */
  position: number;
});

