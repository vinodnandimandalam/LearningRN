export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

export interface SecondaryUser {
  id: number;
  name: string;
  email: string;
}

// { id: 1, name: 'Alice Smith', email: 'alice@example.com' }
