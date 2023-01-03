/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The payload sent to delete a guild.
 */
export type DeleteGuildPayload = {
  /**
   * The password of the user. If this is a bot account, the password is not required and no
   * body should be sent.
   */
  password: string;
};

