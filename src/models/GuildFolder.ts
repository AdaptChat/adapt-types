/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GuildFolderInfo } from './GuildFolderInfo';

/**
 * Represents a folder that contains a collection of guilds. This is only shown in the client's UI.
 */
export type GuildFolder = {
  guilds: Array<number>;
  path?: Array<GuildFolderInfo>;
};

