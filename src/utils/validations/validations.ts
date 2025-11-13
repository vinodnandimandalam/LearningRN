const MAX_LOCAL_LENGTH = 64;
export const validateEmailLength = (email: string) => {
  if (!email || email.length === 0) {
    return false;
  }

  // Find the index of the '@' symbol
  const atIndex = email.indexOf('@');

  if (atIndex === -1) {
    return false; // No '@' symbol
  }

  // Extract the local part (everything before the '@')
  const localPart = email.substring(0, atIndex);

  // Boundary check: local part length must be > 0 and <= MAX_LOCAL_LENGTH
  return localPart.length > 0 && localPart.length <= MAX_LOCAL_LENGTH;
};
