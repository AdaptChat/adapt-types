/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientUser } from '../models/ClientUser';
import type { CreateUserPayload } from '../models/CreateUserPayload';
import type { CreateUserResponse } from '../models/CreateUserResponse';
import type { DeleteUserPayload } from '../models/DeleteUserPayload';
import type { EditUserPayload } from '../models/EditUserPayload';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create User
   * Create User
   *
   * Registers a new user account with the given payload.
   * @returns CreateUserResponse User ID and token
   * @throws ApiError
   */
  public createUser({
    requestBody,
  }: {
    requestBody: CreateUserPayload,
  }): CancelablePromise<CreateUserResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        409: `Username or email is already taken`,
      },
    });
  }

  /**
   * Get Authenticated User
   * Get Authenticated User
   *
   * Fetches information about the logged in user.
   * @returns ClientUser User object
   * @throws ApiError
   */
  public getClientUser(): CancelablePromise<ClientUser> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/me',
      errors: {
        401: `Invalid token`,
      },
    });
  }

  /**
   * Delete User
   * Delete User
   *
   * Deletes the user account of the authenticated user. This is irreversible.
   * @returns void
   * @throws ApiError
   */
  public deleteUser({
    requestBody,
  }: {
    requestBody: DeleteUserPayload,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/me',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        401: `Invalid token/credentials`,
      },
    });
  }

  /**
   * Edit User
   * Edit User
   *
   * Modifies information about the logged in user.
   * @returns User User object after modification
   * @throws ApiError
   */
  public editUser({
    requestBody,
  }: {
    requestBody: EditUserPayload,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/users/me',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid payload`,
        401: `Invalid token`,
        409: `Username is already taken`,
      },
    });
  }

  /**
   * Get User
   * Get User
   *
   * Fetches information about a user by their ID.
   * @returns User User object
   * @throws ApiError
   */
  public getUser({
    userId,
  }: {
    userId: number,
  }): CancelablePromise<User> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{user_id}',
      path: {
        'user_id': userId,
      },
      errors: {
        404: `User not found`,
      },
    });
  }

}
