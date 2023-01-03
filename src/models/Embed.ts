/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmbedAuthor } from './EmbedAuthor';
import type { EmbedField } from './EmbedField';
import type { EmbedFooter } from './EmbedFooter';
import type { EmbedType } from './EmbedType';

/**
 * Represents a special card shown in the UI for various purposes, embedding extra information
 * to the user in a more visually appealing way. These are known as embeds and are used in
 * messages.
 */
export type Embed = {
  author: EmbedAuthor;
  /**
   * The color of the embed, shown as a stripe on the left side of the embed.
   */
  color?: number;
  /**
   * The description, or body text of the embed.
   */
  description?: string;
  fields?: Array<EmbedField>;
  footer: EmbedFooter;
  /**
   * The hue of the main body of the background. This is only available for rich embeds. This
   * should be a number between `0` and `100`, measured as a percentage.
   */
  hue?: number;
  /**
   * The image URL of the embed.
   */
  image?: string;
  /**
   * The thumbnail URL of the embed.
   */
  thumbnail?: string;
  /**
   * The timestamp of the embed.
   */
  timestamp?: string;
  /**
   * The title of the embed.
   */
  title?: string;
  type: EmbedType;
  /**
   * The URL of the embed, shown as a hyperlink in the title. Only available if the embed has a
   * title.
   */
  url?: string;
};

