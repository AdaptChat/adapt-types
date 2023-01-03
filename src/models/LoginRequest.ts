/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TokenRetrievalMethod } from './TokenRetrievalMethod';

/**
 * The request body for POST /login
 */
export type LoginRequest = {
  /**
   * The email to log in with.
   */
  email: string;
  method?: TokenRetrievalMethod;
  /**
   * The password to log in with.
   */
  password: string;
};

