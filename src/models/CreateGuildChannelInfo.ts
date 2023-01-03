/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The type and other information sent to create a new guild channel.
 */
export type CreateGuildChannelInfo = ({
  /**
   * The icon of the channel represented as a
   * [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme), if any.
   */
  icon?: string;
  /**
   * The topic of the text channel, if any.
   */
  topic?: string;
  type: CreateGuildChannelInfo.type;
} | {
  /**
   * The URL of the icon of the channel, if any.
   */
  icon?: string;
  type: CreateGuildChannelInfo.type;
  /**
   * The user limit of the channel. This should be a value between `0` and `500`. A value
   * of `0` is the default and indicates the absence of a user limit.
   */
  user_limit?: number;
} | {
  type: CreateGuildChannelInfo.type;
});

export namespace CreateGuildChannelInfo {

  export enum type {
    TEXT = 'Text',
  }


}

