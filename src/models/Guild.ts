/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildChannel } from './GuildChannel';
import type { Member } from './Member';
import type { PartialGuild } from './PartialGuild';
import type { Role } from './Role';

/**
 * Represents a guild with all information, sometimes referred to as a server.
 */
export type Guild = (PartialGuild & {
  channels?: Array<GuildChannel>;
  members?: Array<Member>;
  roles?: Array<Role>;
});

