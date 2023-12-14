import { GenericPrismaDelegate } from "../utils/prisma";

export class BaseRepository<
    Model,
    CreateSchema,
    UpdateSchema extends {id: string},
    FilterSchema
> {

    constructor(
        private readonly createModelFn: (data: any) => Model,
        private prisma: GenericPrismaDelegate
        ) {}
    
    async create(instance: CreateSchema): Promise<Model> {
        const response = await this.prisma.create({
            data: instance as any
        });
        return this.createModelFn(response)
    }

    async update(instance: UpdateSchema): Promise<Model> {
        const response = await this.prisma.update({
            where: {
                id: instance.id
            },
            data: instance
        });
        return this.createModelFn(response)
    }   

    async deleteById(id: string): Promise<Model> {
        const response = await this.prisma.delete({
            where: {
                id
            }
        });
        return this.createModelFn(response)
    }

    async getAll(): Promise<Model[]> {
        const response = await this.prisma.findMany();
        return response.map(this.createModelFn.bind(this))
    }

    async getById(id: string): Promise<Model | null> {
        const response = await this.prisma.findFirst({where: {id}});
        return response ? this.createModelFn(response) : null
    }

    async filter(filter: FilterSchema, orderBy: string = ''): Promise<Model[]> {
        const query: any = {
            where: filter as any
        }

        if(orderBy) {
            query.orderBy = {
                [orderBy]: 'asc'
            }
        }
        
        const response = await this.prisma.findMany(query);
        return response.map(this.createModelFn.bind(this))
    }
}