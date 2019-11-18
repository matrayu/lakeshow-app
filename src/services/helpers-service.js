const HelpersService = {
    checkUsername(name) {
        if (name.length <= 5) {
            return {
                error: 'Username must be at least 6 characters',
                isValid: false
            }
        } else {
            return {
                error: null,
                isValid: true
            }
        }
    },

    checkPassword(password) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
        if (password.length === 0) {
            return { error: 'Please enter a valid password' }
        } else {
            if (!re.test(String(password))) {
                return { error: 'Passwords must be 8 characters and include at least 1 lowercase, 1 uppercase, 1 numeric, and 1 special character.'}
            }
        }
        return { error: null }
    },

    checkConfirmPassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            return { error: 'Passwords do not match' }
        } else {
            return { error: null }
        }
    },

    checkEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.length === 0 || !re.test(String(email).toLowerCase())) {
            return { error: 'Please enter a valid email address' }
        } else {
            return { error: null }
        }
    },

    checkFirstName(first_name) {
        if (first_name.length < 2) {
            return { error: 'Please enter a valid first name' }
        }
        return { error: null }
    },

    checkLastName(last_name) {
        if (last_name.length < 2) {
            return { error: 'Please enter a valid last name' }
        }
        return { error: null }
    },

    convertMoneyToNumber(number) {
        return Number(number.replace(/[^0-9.-]+/g,""));
    },
}

export default HelpersService;