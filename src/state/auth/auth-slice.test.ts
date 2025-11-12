// test case scenarios
// test case of isAuthenticated is true and user is not null
// test authenticator reducer should return the correct updated state
// test user reducer should return the correct updated state

import authReducer, { setIsAuthenticated, setUser } from './auth-slice';
import { AuthState, User } from '../types';

describe('auth slice', () => {
  const user: User = {
    id: '1',
    name: 'test user',
    email: 'testemail@gmail.com',
    token: 'xyz',
  };

  const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
  };

  it('should return the correct updated auth and user states when isAuthenticated is true', () => {
    const authAction = setIsAuthenticated(true);
    const userAction = setUser(user);

    const originalState = JSON.parse(JSON.stringify(initialState));
    const newStateWithAuth = authReducer(originalState, authAction);
    const newStateWithUser = authReducer(originalState, userAction);
    expect(newStateWithAuth.isAuthenticated).toBe(true);
    expect(newStateWithUser.user?.email).toBe(user.email);
  });
});
