/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An intermediate representation of a channel's type. This is never used directly, but is used
 * to help deserialization.
 */
export enum ChannelType {
  TEXT = 'text',
  ANNOUNCEMENT = 'announcement',
  VOICE = 'voice',
  CATEGORY = 'category',
  DM = 'dm',
  GROUP = 'group',
}
