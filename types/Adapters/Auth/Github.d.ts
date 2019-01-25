export type GithubAuthData = {
  id: string
  access_token: string
}

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 */
export declare function validateAuthData(authData: GithubAuthData): Promise<void>

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>
