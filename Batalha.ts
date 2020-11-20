import Heroi from "./Heroi";
import Vilao from "./Vilao";

// export {Batalha};

// let char1: Heroi;
// let char2: Vilao;
export default class Batalha {
    constructor(
        public heroi: Heroi,
        public vilao: Vilao,
    ){}
// export default class Batalha{
//     constructor(public char1 = Heroi, public char2 = Vilao){
//         this.char1 = Heroi
//         this.char2 = Vilao
//     }
    public luta():void{
        console.log(`${this.heroi.nome} vs ${this.vilao.nome}`);
        console.log(`Força.: ${this.heroi.forca} vs ${this.vilao.forca}`);
        console.log(`Vida..: ${this.heroi.vida} vs ${this.vilao.vida}`);
        console.log(`Ataque: ${this.heroi.ataque} vs ${this.vilao.ataque}`);
        console.log(`Defesa: ${this.heroi.defesa} vs ${this.vilao.defesa}`);
        console.log(`Fome..: ${this.heroi.fome} vs ${this.vilao.fome}`);
        
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