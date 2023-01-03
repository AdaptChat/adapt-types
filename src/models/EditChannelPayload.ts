/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The request body sent to modify a channel.
 */
export type EditChannelPayload = {
  /**
   * The new icon of the channel. Explicitly setting this to `None` will clear the icon.
   * Takes effect for all channels except for user DMs.
   *
   * This should be a [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme).
   */
  icon?: string | null;
  /**
   * The new name of the channel. If left blank, the name will not be changed. Takes effect for
   * all channels except for user DMs.
   */
  name?: string;
  /**
   * The new topic or description of the channel. Explicitly setting this to `None` will clear
   * the topic. Only takes effect for text-based channels in guilds, or group chats.
   */
  topic?: string | null;
  /**
   * The new user limit of the voice channel. Explicitly setting this to `0` will remove the
   * current limit, if there is any. Only takes effect for guild voice channels.
   */
  user_limit?: number;
};

