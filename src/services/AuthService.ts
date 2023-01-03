/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginRequest } from '../models/LoginRequest';
import type { LoginResponse } from '../models/LoginResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AuthService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Generate Token (Login)
   * Generate Token (Login)
   *
   * Login to the API with your email and password to retrieve an authentication token.
   * @returns LoginResponse Login successful
   * @throws ApiError
   */
  public login({
    requestBody,
  }: {
    requestBody: LoginRequest,
  }): CancelablePromise<LoginResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Invalid credentials`,
      },
    });
  }

}
