import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/state';
import { useEffect } from 'react';
import { fetchUser } from '../../state/user/user-slice';
import { Text } from 'react-native';

const UserDetails = ({ userId }: { userId: number }) => {
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (userId) dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  if (userData.status === 'loading')
    return <Text testID="loading-state">Loading user....</Text>;

  if (userData.status === 'failed')
    return <Text testID="error-state">Error</Text>;

  if (userData.user) {
    return <Text>{userData.user.name}</Text>;
  }

  return <Text>No user founc</Text>;
};

export default UserDetails;
