class UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPass:string;
    createdAt: string;
    updatedAt: string;


    constructor(
        userId: number,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirmPass:string,
        createdAt: string,
        updatedAt: string
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.confirmPass=confirmPass;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
export default UserModel;

