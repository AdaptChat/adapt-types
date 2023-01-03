/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Member } from './Member';
import type { User } from './User';

/**
 * Represents either a member or a user.
 */
export type MemberOrUser = ({
  Member: Member;
} | {
  User: User;
});

