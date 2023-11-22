import { BaseModel, IBaseModel } from "./base-model";

export interface IUser extends IBaseModel{
    name: string;
    fullName: string
    email: string
    password: string
}

export class User extends BaseModel implements IUser {
    name: string;
    fullName: string
    email: string
    password: string

    constructor(
        props: IUser
    ) {
        super(props);
        this.name = props.name;
        this.fullName = props.fullName
        this.email = props.email
        this.password = props.password
    }
}