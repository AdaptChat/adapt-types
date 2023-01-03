/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DmChannelInfo } from './DmChannelInfo';

/**
 * Represents a direct-message-like channel that does not belong in a guild.
 */
export type DmChannel = (DmChannelInfo & {
  /**
   * The ID of the channel.
   */
  id: number;
});

