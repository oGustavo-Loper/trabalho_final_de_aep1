import Heroi from "./Heroi";
import Vilao from "./Vilao";

export default class Batalha {
    constructor(
        public heroi: Heroi,
        public vilao: Vilao,
    ){}
    public luta():void{
        console.log(`${this.heroi.nome} vs ${this.vilao.nome}`);
        console.log(`Força.: ${this.heroi.forca.toFixed(1)} vs ${this.vilao.forca.toFixed(1)}`);
        console.log(`Vida..: ${this.heroi.vida.toFixed(1)} vs ${this.vilao.vida.toFixed(1)}`);
        console.log(`Ataque: ${this.heroi.ataque.toFixed(1)} vs ${this.vilao.ataque.toFixed(1)}`);
        console.log(`Defesa: ${this.heroi.defesa.toFixed(1)} vs ${this.vilao.defesa.toFixed(1)}`);
        console.log(`Fome..: ${this.heroi.fome.toFixed(1)} vs ${this.vilao.fome.toFixed(1)}`);
        
        let vezes = 0;
        if(this.heroi.vida > this.vilao.vida){
            vezes++;
        }if(this.heroi.ataque > this.vilao.ataque){
            vezes++;
        }if(this.heroi.defesa > this.vilao.defesa){
            vezes++;
        }if(this.heroi.fome > this.vilao.fome){
            vezes++;
        } if(vezes >= 3){
            console.log(`Voce Conseguiu Ganhar, seu fracassado\n`);
        }else {
            console.log("Você perdeu, tente novamente\n");
        }
    }
}