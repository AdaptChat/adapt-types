/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Payload sent to create a new user.
 */
export type CreateUserPayload = {
  /**
   * The email of the user. Must be a valid email address.
   */
  email: string;
  /**
   * The password of the user. Must be between 8 and 32 characters.
   */
  password: string;
  /**
   * The username of the user. Must be between 2 and 32 characters.
   */
  username: string;
};

