export interface IBaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}
export class BaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        props: IBaseModel
    ) {
        this.id = props.id;
        this.createdAt = props.createdAt,
        this.updatedAt = props.updatedAt
    }
}