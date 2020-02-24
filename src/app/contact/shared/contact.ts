export class Contact {
    private _id: number;
    private _nome: string;
    private _telefone: number;

    /**
     *
     */
    constructor(id : number, name : string, telefone : number) {
        this._id = id;
        this.nome = name;
        this._telefone = telefone;
        
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get telefone(): number {
        return this._telefone;
    }
    public set telefone(value: number) {
        this._telefone = value;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }
}
