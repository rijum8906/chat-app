export interface User {
  id: string;
  email: string;
  role: string;
  username: string;
  displayName: string;
}

export interface AuthState {
  isLoading: boolean;
  user: User | null;
  token: string | null;
  isError: boolean;
  method: 'google' | 'password' | null;
  attempts: number;
}

export interface AuthSuccessPayload {
  user: User;
  token: string;
  method: 'google' | 'password';
}
