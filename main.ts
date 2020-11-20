import Heroi from "./Heroi";
import Vilao from "./Vilao";
import Batalha from "./Batalha";
import prompt from "prompt-sync";

// let person: Personagem = new Personagem("Gustavo", 100, 50, 50, 50);

let teclado = prompt();
let char1 : Heroi = new Heroi(teclado(`Qual nome do Heroi? `), 100,50,50,50,100);
let char2 : Vilao = new Vilao("Baitimaum",  50 + Math.floor(Math.random() * 50), 50 + Math.floor(Math.random() * 50), 50 + Math.floor(Math.random() * 50), 50 + Math.floor(Math.random() * 50),  50 + Math.floor(Math.random() * 50));
// let char3 : Batalha = const name = new type(arguments); Batalha(Heroi, Vilao);
const char3 : Batalha = new Batalha(char1, char2);
let option: number = 0;

while(option != 9){
    console.log(`*=================================*`);
    console.log(`| 1. Dados do Personagem          |`);
    console.log(`| 2. Treinar Força                |`);
    console.log(`| 3. Treinar Ataque               |`);
    console.log(`| 4. Treinar Defesa               |`);
    console.log(`| 5. Batalhar                     |`);
    console.log(`| 6. A MIMIR                      |`);
    console.log(`| 7. Tomar Porção                 |`);
    console.log(`| 9. Sair                         |`);
    console.log(`*=================================*`);

    option = +teclado("O que desejas fazer? ");
    
    switch(option){
        case 1:
            console.clear()
            console.log(char1.dados_heroi());
            console.log(char2.dados_vilao());
            break;
        case 2:
            console.clear()
            console.log(char1.dados_heroi());
            char1.treinar_forca();
            break;
        break;
        case 3:
            console.clear()
            console.log(char1.dados_heroi());
            char1.treinar_ataque();
        break;
        case 4:
            console.clear()
            console.log(char1.dados_heroi());
            char1.treinar_defesa();
        break;
        case 5:
            console.clear()
            char3.luta();
            char3.heroi;
            char3.vilao;
        break;
        case 6:
            console.clear()
            console.log(char1.dados_heroi());
            char1.a_mimir();
        break;
        case 7:
            console.clear()
            console.log("Colocar algo aqui");
        break;
        case 9:
            break;
        default:
            console.log("Option errada, tente novamente\n");
        break;
    }
}
console.log("Saindo....\n");