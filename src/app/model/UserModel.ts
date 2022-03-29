import { UserPostagem } from "./UserPostagem";

export class UserModel{
    public id: number;
    public name: String;
    public user: String
    public password: String

    public photo: String;
    public type: String

    public UserPostagem: UserPostagem[]
}