/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Payload sent when editing a user.
 */
export type EditUserPayload = {
  /**
   * The new avatar of the user. Leave empty to keep the current avatar, and set to `null` to
   * remove the avatar. If provided, the avatar should be represented as a
   * [Data URI scheme](https://en.wikipedia.org/wiki/Data_URI_scheme).
   */
  avatar?: string | null;
  /**
   * The new banner URL of the user. Leave empty to keep the current banner, and set to `null` to
   * remove the banner.
   */
  banner?: string | null;
  /**
   * The new bio of the user. Leave empty to keep the current bio, and set to `null` to remove
   * the bio.
   */
  bio?: string | null;
  /**
   * The new username of the user. Leave empty to keep the current username.
   */
  username?: string;
};

