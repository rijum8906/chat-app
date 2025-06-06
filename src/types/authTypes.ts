export interface User {
  id: string;
  email: string;
  role: string;
  username: string;
  displayName: string;
}

export type Method = 'google' | 'password';

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  token: string | null;
  isError: boolean;
  method: Method | null;
  attempts: number;
}

export interface AuthSuccessPayload {
  user: User;
  token: string;
  method: Method;
}

export interface SigninPayload {
  username: string | null;
  email: string | null;
  password: string;
}

export interface SignupPayload {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface AuthContextType {
  user: Record<string, any>;
  token: string;
  signout: () => void;
  passwordAuth: {
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
  };
}

export interface AuthResponse {
  success: boolean;
  data:
    | {
        token: string;
        message: string;
      }
    | undefined;
  error:
    | {
        message: string;
      }
    | undefined;
}

export interface GoogleAuthPayload {
  token: string;
}
