export const fetchUserById = async (userId: number) => {
  // Simulate a network delay
  await new Promise<void>(resolve => setTimeout(resolve, 50));
  if (userId === 1) {
    return { id: 1, name: 'Alice Smith', email: 'alice@example.com' };
  }
  throw new Error('User not found');
};
