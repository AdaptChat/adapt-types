/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents common information found in text-based guild channels.
 */
export type TextBasedGuildChannelInfo = {
  /**
   * Whether the channel is locked. Only people with the `MANAGE_CHANNELS` permission can
   * send messages in locked channels.
   */
  locked: boolean;
  /**
   * Whether the channel is NSFW.
   */
  nsfw: boolean;
  /**
   * The slowmode delay of the channel, in **milliseconds**. This should be a value between
   * `0` and `86_400_000` (24 hours). `0` indicates the absence of slowmode.
   */
  slowmode: number;
  /**
   * The topic of the channel, if any.
   */
  topic?: string;
};

