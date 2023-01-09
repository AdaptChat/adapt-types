/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The payload send to edit the authenticated user as a member.
 */
export type EditClientMemberPayload = {
  /**
   * The new nickname of the member. Leave empty to keep the current nickname, and set to `null`
   * to remove the nickname.
   */
  nick?: string | null;
};

