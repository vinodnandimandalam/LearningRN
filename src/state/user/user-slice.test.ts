import reducer, { fetchUser } from './user-slice';

describe('user slice reducer', () => {
  const initialState = {
    user: null,
    status: 'idle',
    error: null as string | null,
  };

  it('returns the initial state when an unknown action is dispatched', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('sets status to loading when fetchUser is pending', () => {
    const state = reducer(initialState, { type: fetchUser.pending.type });
    expect(state).toEqual({
      user: null,
      status: 'loading',
      error: null,
    });
  });

  it('stores the user and marks status succeeded when fetchUser is fulfilled', () => {
    const mockUser = { id: 1, name: 'Alice', email: 'alice@example.com' };
    const state = reducer(initialState, {
      type: fetchUser.fulfilled.type,
      payload: mockUser,
    });

    expect(state).toEqual({
      user: mockUser,
      status: 'succeeded',
      error: null,
    });
  });

  it('captures the error message and marks status failed when fetchUser is rejected', () => {
    const state = reducer(initialState, {
      type: fetchUser.rejected.type,
      error: { message: 'Network error' },
    });

    expect(state).toEqual({
      user: null,
      status: 'failed',
      error: 'Network error',
    });
  });
});
