/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Payload sent when changing a user's password.
 */
export type ChangePasswordPayload = {
  /**
   * The current password of the user.
   */
  current_password: string;
  /**
   * The new password of the user.
   */
  new_password: string;
};

