interface Role {
    id: number;
    name: ERole;
}

// Define the ERole enum
enum ERole {
    ROLE_USER = "ROLE_USER",
    ROLE_EMPLOYEE = "ROLE_EMPLOYE",
    ROLE_ADMIN = "ROLE_ADMIN"
}

class UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    roles: Role[];
    confirmPass: string;

    constructor(
        userId: number,
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        password: string,
        roles: Role[],
        confirmPass: string
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = userName;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.confirmPass = confirmPass;
    }
}

export default UserModel;
