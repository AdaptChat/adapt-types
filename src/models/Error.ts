/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MalformedBodyErrorType } from './MalformedBodyErrorType';
import type { Permissions } from './Permissions';

/**
 * An error that occurs within Adapt.
 */
export type Error = ({
  error_type: MalformedBodyErrorType;
  /**
   * A generalized message about the error.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The field that failed validation.
   */
  field: string;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The name of the missing field.
   */
  field: string;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The type of item that couldn't be found.
   */
  entity: string;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
  /**
   * Which credential was invalid.
   */
  what: string;
} | {
  /**
   * The ID of the guild you are not a member of.
   */
  guild_id: number;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The ID of the guild you are not the owner of.
   */
  guild_id: number;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
} | {
  /**
   * The ID of the guild you are missing permissions in.
   */
  guild_id: number;
  /**
   * The error message.
   */
  message: string;
  permissions: Permissions;
  type: Error.type;
} | {
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
  /**
   * What was already taken.
   */
  what: string;
} | {
  /**
   * The IP address that is being rate limited.
   */
  ip: string;
  /**
   * The ratelimited message.
   */
  message: string;
  /**
   * How long you should wait before sending another request, in whole seconds.
   */
  retry_after: number;
  type: Error.type;
} | {
  /**
   * A debug version of the error, or `None` if there is no debug version.
   */
  debug?: string;
  /**
   * The error message.
   */
  message: string;
  type: Error.type;
  /**
   * What caused the error. `None` if unknown.
   */
  what?: string;
});

export namespace Error {

  export enum type {
    MALFORMED_BODY = 'malformed_body',
  }


}

