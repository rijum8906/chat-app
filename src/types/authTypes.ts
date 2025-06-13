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
  }
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

export interface AuthResponse {
  success: boolean;
  message?: string;
  data?: {
    user: User;
    token: string;
  };
  error?: {
    message: string;
    stack?: string;
  }
}