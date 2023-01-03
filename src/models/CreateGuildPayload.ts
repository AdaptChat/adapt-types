/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The payload sent to create a new guild.
 */
export type CreateGuildPayload = {
  /**
   * The banner URL for the guild. Must be a valid URL, or `None` to not set a banner.
   */
  banner?: string;
  /**
   * The description of the guild. Must be between 0 and 1000 characters, or `None` for
   * no description.
   */
  description?: string;
  /**
   * The icon for the guild. Must be a valid URL, or `None` to not set an icon. This should be
   * a [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme) if provided.
   */
  icon?: string;
  /**
   * The name of the guild. Must be between 2 and 100 characters.
   */
  name: string;
  /**
   * Whether the guild should be public or not. Defaults to `false`.
   */
  public?: boolean;
};

