export class User {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public token: string;
    public created_at: string;
    public updated_at: string;
    public deleted_at: string;
    public usuario: string;
    public cliente: any = {medios:[]};
}
