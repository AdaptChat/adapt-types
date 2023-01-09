/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The payload sent to edit a member.
 */
export type EditMemberPayload = {
  /**
   * The new nickname of the member. Leave empty to keep the current nickname, and set to `null`
   * to remove the nickname.
   */
  nick?: string | null;
  roles?: Array<number>;
};

