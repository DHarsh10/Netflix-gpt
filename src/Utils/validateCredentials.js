const validateCredentials = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

  const isemailValid = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);


  if (!isemailValid) {
    return "Email is not correct";
  } else if (!isValidPassword) {
    return "Password is not correct";
  } else if (isemailValid && isValidPassword) {
    return null;
  }
};

export default validateCredentials;
