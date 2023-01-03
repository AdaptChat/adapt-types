/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { Adapt } from './Adapt';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { Attachment } from './models/Attachment';
export type { ChangeEmailPayload } from './models/ChangeEmailPayload';
export type { ChangePasswordPayload } from './models/ChangePasswordPayload';
export type { Channel } from './models/Channel';
export { ChannelType } from './models/ChannelType';
export type { ClientUser } from './models/ClientUser';
export { CreateGuildChannelInfo } from './models/CreateGuildChannelInfo';
export type { CreateGuildChannelPayload } from './models/CreateGuildChannelPayload';
export type { CreateGuildPayload } from './models/CreateGuildPayload';
export type { CreateUserPayload } from './models/CreateUserPayload';
export type { CreateUserResponse } from './models/CreateUserResponse';
export type { DeleteGuildPayload } from './models/DeleteGuildPayload';
export type { DeleteUserPayload } from './models/DeleteUserPayload';
export type { DmChannel } from './models/DmChannel';
export { DmChannelInfo } from './models/DmChannelInfo';
export type { EditChannelPayload } from './models/EditChannelPayload';
export type { EditGuildPayload } from './models/EditGuildPayload';
export type { EditUserPayload } from './models/EditUserPayload';
export type { Embed } from './models/Embed';
export type { EmbedAuthor } from './models/EmbedAuthor';
export type { EmbedField } from './models/EmbedField';
export type { EmbedFooter } from './models/EmbedFooter';
export { EmbedType } from './models/EmbedType';
export { Error } from './models/Error';
export type { Guild } from './models/Guild';
export type { GuildChannel } from './models/GuildChannel';
export { GuildChannelInfo } from './models/GuildChannelInfo';
export type { GuildFlags } from './models/GuildFlags';
export type { GuildFolder } from './models/GuildFolder';
export type { GuildFolderInfo } from './models/GuildFolderInfo';
export type { GuildMemberCount } from './models/GuildMemberCount';
export type { LoginRequest } from './models/LoginRequest';
export type { LoginResponse } from './models/LoginResponse';
export { MalformedBodyErrorType } from './models/MalformedBodyErrorType';
export type { MaybePartialUser } from './models/MaybePartialUser';
export type { Member } from './models/Member';
export type { MemberOrUser } from './models/MemberOrUser';
export type { Message } from './models/Message';
export { MessageEmbedFieldAlignment } from './models/MessageEmbedFieldAlignment';
export type { MessageFlags } from './models/MessageFlags';
export { MessageInfo } from './models/MessageInfo';
export type { PartialGuild } from './models/PartialGuild';
export type { PermissionOverwrite } from './models/PermissionOverwrite';
export type { PermissionPair } from './models/PermissionPair';
export type { Permissions } from './models/Permissions';
export type { Relationship } from './models/Relationship';
export { RelationshipType } from './models/RelationshipType';
export type { Role } from './models/Role';
export type { RoleFlags } from './models/RoleFlags';
export type { TextBasedGuildChannelInfo } from './models/TextBasedGuildChannelInfo';
export { TokenRetrievalMethod } from './models/TokenRetrievalMethod';
export type { User } from './models/User';
export type { UserFlags } from './models/UserFlags';

export { AuthService } from './services/AuthService';
export { ChannelsService } from './services/ChannelsService';
export { GuildsService } from './services/GuildsService';
export { UsersService } from './services/UsersService';