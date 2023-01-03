/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Data returned when creating a new user.
 */
export type CreateUserResponse = {
  /**
   * The ID of the user.
   */
  id: number;
  /**
   * The token to use for authentication.
   */
  token: string;
};

