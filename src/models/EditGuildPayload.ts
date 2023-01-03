/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The payload sent to edit a guild.
 */
export type EditGuildPayload = {
  /**
   * The new banner URL of the guild. Leave empty to keep the current banner, and set to `null`
   * to remove the banner.
   */
  banner?: string | null;
  /**
   * The new description of the guild. Leave empty to keep the current description, and set to
   * `null` to remove the description.
   */
  description?: string | null;
  /**
   * The new icon of the guild. Leave empty to keep the current icon, and set to `null` to
   * remove the icon. The icon should be represented as a
   * [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme).
   */
  icon?: string | null;
  /**
   * The new name of the guild. Leave empty to keep the current name.
   */
  name?: string;
  /**
   * Whether the guild should be public or not. Leave empty to keep the current setting.
   */
  public?: boolean;
};

