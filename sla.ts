export class Sla {
    protected _nome: string;
    protected _forca: number;
    protected _vida: number;
    protected _ataque: number;
    protected _defesa: number;
    protected _fome: number;
    constructor(nome: string, forca: number, vida: number, ataque: number, defesa: number, fome: number){
        this._nome = nome;
        this._forca = forca;
        this._vida = vida;
        this._ataque = ataque;
        this._defesa = defesa;
        this._fome = fome;
    }
}