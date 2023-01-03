/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TextBasedGuildChannelInfo } from './TextBasedGuildChannelInfo';

/**
 * Represents the type along with type-specific info of a guild channel.
 */
export type GuildChannelInfo = ((TextBasedGuildChannelInfo & {
  type: GuildChannelInfo.type;
}) | {
  type: GuildChannelInfo.type;
  /**
   * The user limit of the channel. This should be a value between `0` and `500`. A value
   * of `0` indicates the absence of a user limit.
   */
  user_limit: number;
} | {
  type: GuildChannelInfo.type;
});

export namespace GuildChannelInfo {

  export enum type {
    TEXT = 'text',
  }


}

