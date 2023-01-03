/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents the type and info of a message.
 */
export type MessageInfo = ({
  type: MessageInfo.type;
} | {
  type: MessageInfo.type;
  /**
   * The ID of the user who joined.
   */
  user_id: number;
} | {
  type: MessageInfo.type;
  /**
   * The ID of the user who left.
   */
  user_id: number;
} | {
  /**
   * The ID of the user that pinned the message.
   */
  pinned_by: number;
  /**
   * The ID of the message that was pinned.
   */
  pinned_message_id: number;
  type: MessageInfo.type;
});

export namespace MessageInfo {

  export enum type {
    DEFAULT = 'default',
  }


}

