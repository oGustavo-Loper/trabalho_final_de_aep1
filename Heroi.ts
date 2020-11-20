import { Sla } from './sla'
export default class Heroi extends Sla{
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

    public dados_heroi(): string{
        return (
        "Guerreiro: \n" +
        "\nNome...: " + this.nome + 
        ("\nForça..: " + this.forca.toFixed(1)) + 
        ("\nVida...: " + this.vida.toFixed(1)) +
        ("\nAtaque.: " + this.ataque.toFixed(1)) + 
        ("\nDefesa.: " + this.defesa.toFixed(1)) + 
        ("\nFome...: " + this.fome.toFixed(1))
        );
    }

    public treinar_forca(): void{
        this.Forca += this.random(5);
        this.Vida -= this.random(2);
        this.Fome -= this.random(10);
        if(this.fome < 5){
            if(this.fome < 0){
                this.Fome = 0;
            }if(this.defesa > 100){
                this.Defesa = 100;
                return console.log("Minha defesa já esta top MEU!\n");
            }if(this.vida < 0){
                this.Vida = 0;
                return console.log("ESTOU MORTO OLHA MINHA VIDA \n");
            }
            return console.log("Estou com fome\n");
        }
        if(this.forca >= 100){
            this.Forca = 100;
            console.log("Já estou bem treinado, vamos simbora pra batalha GOGOGO!\n");
        }
    }
    public treinar_ataque(): void{
        this.Ataque += this.random(5);
        this.Vida -= this.random(5);
        this.Fome -= this.random(10);
        if(this.ataque >= 100){
            this.Ataque = 100;
            return console.log("Estou bem Treinado de ataque\n");
        } if(this.vida < 0){
            this.Vida = 0;
            return console.log("ESTOU MORTO OLHA MINHA VIDA \n");
        } if(this.fome < 5){
            if(this.fome < 0){
                this.Fome = 0;
                return console.log("Estou com fome, me alimente\n");
            }
        }
    }
    public treinar_defesa(): void{
        this.Defesa += this.random(5);
        this.Forca -= this.random(2);
        this.Vida -= this.random(2);
        this.Fome -= this.random(2);
        if(this.defesa > 100){
            this.Defesa = 100;
            return console.log("Estou treinado no maximo\n");
        } if(this.vida < 0){
            this.Vida = 0;
            return console.log("ESTOU MORTO OLHA MINHA VIDA \n");
        } if(this.fome < 5){
            if(this.fome < 0){
                this.Fome = 0;
                return console.log("Estou com fome, me alimente\n");
            }
        } if(this.forca < 10){
            if(this.forca <= 0){
                this.Forca = 0;
                return console.log("Estou morto, deixe eu dormir um pouco\n");
            }
            return console.log("Estou quase morrendo")
        }
    }

    public a_mimir(): void{
        if(this.vida < 99){
            this.Vida += this.random(50);
        }
        if(this.vida >= 100){
            this.Vida = 100;
            return console.log("Estou Bem descansadinho\n");
        }
    }

    // public porcao(): void{
    //     this.random(1);
    //     if(this.random < 0){
    //         return console.log("Você morreu")
    //     }
    // }

    private random(fator:number):number{
        return Math.random() * fator;
    }
}