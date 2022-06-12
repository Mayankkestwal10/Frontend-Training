// Single Responsibility Principle

// A module should be responsible for only one actor. As a consequence, it has only one reason to change

// Before
validateAndCreateUser = (username, email, password) => {
    const isFormValid = testForm(username, email, password)
    if(isFormValid){
        User.create(username, email, password)
    }
}


// After

// 1. Validate user

validate = (username, email, password) => {
    const isFormValid = testForm(username, email, password)
    if(isFormValid){
        createUser(username, email, password)
    }
}

// 2. Create User
createUser = (username, email, password) => User.create(username, email, password)