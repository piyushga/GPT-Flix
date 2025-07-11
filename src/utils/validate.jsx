export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailRegex) return "Please enter a valid email.";

  return null;
};

export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  if (!passwordRegex)
    return "Your password must be of length 8 and have atleast 1 uppercase, 1 lowercase, 1 digit and 1 special character.";

  return null;
};
