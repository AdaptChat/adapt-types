/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents extra information associated with DM channels.
 */
export type DmChannelInfo = ({
  recipient_ids?: Array<number>;
  type: DmChannelInfo.type;
} | {
  /**
   * The URL of the group's icon, if any.
   */
  icon?: string;
  /**
   * The name of the group chat.
   */
  name: string;
  /**
   * The ID of the owner of the group chat.
   */
  owner_id: number;
  recipient_ids: Array<number>;
  /**
   * The topic of the group chat, if any.
   */
  topic?: string;
  type: DmChannelInfo.type;
});

export namespace DmChannelInfo {

  export enum type {
    DM = 'dm',
  }


}

