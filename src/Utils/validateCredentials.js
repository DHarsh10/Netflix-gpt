const validateCredentials = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

    const isemailValid = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    return {
        isemailValid, isValidPassword
    }
}


export default validateCredentials