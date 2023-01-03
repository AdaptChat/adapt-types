/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents a message attachment.
 */
export type Attachment = {
  /**
   * The description/alt text of the attachment.
   */
  description?: string;
  /**
   * The filename of the attachment.
   */
  filename: string;
  /**
   * The snowflake ID of the attachment.
   */
  id: number;
  /**
   * The size of the attachment, in bytes.
   */
  size: number;
  /**
   * The CDN URL of the attachment.
   */
  url: string;
};

