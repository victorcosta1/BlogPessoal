import { UserModel } from "./UserModel";
import { UserTema } from "./UserTema";

export class UserPostagem{
    public id: number;
    public title: string;
    public description: string;
    public date: Date;


    public user: UserModel;
    public theme: UserTema;
}