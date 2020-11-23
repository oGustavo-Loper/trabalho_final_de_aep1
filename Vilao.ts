import { Dados_dos_jogadores } from './dados_dos_jogadores'
export default class Vilao extends Dados_dos_jogadores{
    constructor(nome: string, forca: number, vida: number, ataque: number, defesa: number, fome: number){
        super(nome, forca, vida, ataque, defesa, fome);
    }

    public get nome(): string{
        return this._nome;
    }
    public set Nome(Nome: string){
        this._nome = Nome;
    }
    public get forca(): number{
        return this._forca;
    }
    public set Forca(Forca: number){
        this._forca = Forca;
    }

    public get vida(): number{
        return this._vida;
    }
    public set Vida(Vida: number){
        this._vida = Vida;
    }

    public get ataque(): number{
        return this._ataque;
    }
    public set Ataque(Ataque: number){
        this._ataque = Ataque;
    }

    public get defesa(): number{
        return this._defesa;
    }
    public set Defesa(Defesa: number){
        this._defesa = Defesa;
    }

    public get fome(): number{
        return this._fome;
    }
    public set Fome(Fome: number){
        this._fome = Fome;
    }
    public dados_vilao(): string{
        return (
        "Guerreiro: Vilao \n" +
        "\nNome...: " + this.nome + 
        ("\nForça..: " + this.forca.toFixed(1)) + 
        ("\nVida...: " + this.vida.toFixed(1)) +
        ("\nAtaque.: " + this.ataque.toFixed(1)) + 
        ("\nDefesa.: " + this.defesa.toFixed(1)) +
        ("\nFome...: " + this.fome.toFixed(1))
        );
    }
}