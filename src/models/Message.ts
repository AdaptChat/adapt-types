/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Attachment } from './Attachment';
import type { Embed } from './Embed';
import type { MemberOrUser } from './MemberOrUser';
import type { MessageFlags } from './MessageFlags';
import type { MessageInfo } from './MessageInfo';

/**
 * Represents a text or system message in a channel.
 */
export type Message = (MessageInfo & {
  attachments: Array<Attachment>;
  author?: MemberOrUser;
  /**
   * The snowflake ID of the author of this message, or `None` if this is a system message.
   */
  author_id?: number;
  /**
   * The snowflake ID of the channel this message was sent in.
   */
  channel_id: number;
  /**
   * The text content of this message.
   */
  content?: string;
  embeds: Array<Embed>;
  flags: MessageFlags;
  /**
   * The snowflake ID of the guild this message was sent in, if any.
   */
  guild_id?: number;
  /**
   * The snowflake ID of the message.
   */
  id: number;
  /**
   * A custom nonce for this message. This is a random string that if used, a message with the
   * same nonce will be dispatched by the websocket, indicating that the message was sent.
   *
   * This is only used once and it is not stored.
   */
  nonce?: string;
  /**
   * The revision ID of the message. This is `None` if this message is the current revision.
   */
  revision_id?: number;
  /**
   * The amount of stars this message has received.
   */
  stars: number;
});

