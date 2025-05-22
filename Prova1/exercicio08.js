let altura = 1.35;

let podeMontanhaRussa = false;
let podeRodaGigante = false;
let podeBateBate = false;

if (altura >= 1.5){
    podeMontanhaRussa = true;
}
if (altura >= 1.2){
    podeRodaGigante = true;
}
if (altura >= 1.1){
    podeBateBate = true;
}
console.log("Pode brincar na montanha Russa? " + (podeMontanhaRussa ? 'Sim' : 'Não'));

//1 ponto