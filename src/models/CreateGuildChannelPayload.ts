/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateGuildChannelInfo } from './CreateGuildChannelInfo';
import type { PermissionOverwrite } from './PermissionOverwrite';

/**
 * The request body sent to create a new channel in a guild.
 */
export type CreateGuildChannelPayload = (CreateGuildChannelInfo & {
  /**
   * The icon of the text channel, if any.
   */
  icon?: string;
  /**
   * The name of the text channel.
   */
  name: string;
  overwrites?: Array<PermissionOverwrite>;
  /**
   * The ID of the category to create the channel in, if any.
   */
  parent_id?: number;
});

