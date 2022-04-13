import { UserPostagem } from "./UserPostagem";

export class UserModel{
    public id: number;
    public name: string;
    public user: string
    public password: string

    public photo: string;
    public type: string

    public postagem: UserPostagem[]
}