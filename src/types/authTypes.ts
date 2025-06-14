// User Realted Interfaces
export interface User {
  sub: string;
  email: string;
  username: string;
  roles: string[];
  profile: {
    displayName: string;
    avatarURL: string;
  };
}

export interface UserInfo extends User {
  profile: User['profile'] & {
    firstName: string;
    lastName: string;
    bio: string;
  };
}

// Api Related Interfaces
export interface SignInPayload {
  username?: string;
  email?: string;
  password?: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

export interface GoogleAuthPayload {
  token: string;
}
export type AuthResponse = AuthSuccessResponse | AuthFailureResponse;

export interface AuthSuccessResponse {
  success: true;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

export interface SignOutResponse {
  success: boolean;
  message?: string;
  error?: {
    message: string;
    stack?: string;
  };
}

export interface AuthFailureResponse {
  success: false;
  error: {
    message: string;
    stack?: string;
  };
}
