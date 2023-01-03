/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DmChannel } from './DmChannel';
import type { GuildChannel } from './GuildChannel';

/**
 * Represents any channel.
 */
export type Channel = ({
  Guild: GuildChannel;
} | {
  Dm: DmChannel;
});

