import bcrypt from 'bcrypt';
export const comparePasswords = async (plainPassword: string, hashedPassword: string): Promise<boolean> => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};
