import { UserModel } from "./UserModel";
import { UserTema } from "./UserTema";

export class UserPostagem{
    public id: number;
    public title: String;
    public description: String;
    public date: Date;

    public UserModel: UserModel

    public UserTema: UserTema 
}