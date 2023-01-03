/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Payload sent when changing a user's email.
 */
export type ChangeEmailPayload = {
  /**
   * The new email of the user.
   */
  new_email: string;
  /**
   * The current password of the user.
   */
  password: string;
};

