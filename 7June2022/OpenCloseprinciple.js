// Open Close Principle
// Open for extension but closed for modification

// Before

const roles = ["ADMIN", "USER"]
const checkRoles = (user) => {
    if(roles.includes(user)){
        return true
    }else{
        return false
    }
}

checkRoles("ADMIN") // true
checkRoles("SUPERADMIN") // false

// After
// requirement is to add more roles

const addRole = (role) => roles.push(role) // to extend functionality not modifying previous code
addRole("SUPERADMIN")

checkRoles("SUPERADMIN") // true


