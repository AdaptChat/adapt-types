/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MessageEmbedFieldAlignment } from './MessageEmbedFieldAlignment';

/**
 * Information about an embed's field.
 */
export type EmbedField = {
  align?: MessageEmbedFieldAlignment;
  /**
   * The name of the field.
   */
  name: string;
  /**
   * The value of the field.
   */
  value: string;
};

