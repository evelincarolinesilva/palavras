let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["alegre", "diva", "perfeita"];
  return random(palavras);
}

function inicializaCores(){
  background("rgb(247,189,81)");
  fill("white");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function palavraParcial(minimo,maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
   let texto= palavraParcial(0, width);
  text(texto, 200, 200);
  
  /*if (mouseX < 50){
    let palavra = "A";
    text(palavra, 200, 200);
  } else if(mouseX < 100){
    let palavra = "Al";
    text(palavra, 200, 200);
  } else if(mouseX < 150){
    let palavra = "Ale";
    text(palavra, 200, 200);
  } else if(mouseX < 200){
    let palavra = "Aleg";
    text(palavra, 200, 200);
  } else if(mouseX < 250){
    let palavra = "Alegr";
    text(palavra, 200, 200);
  } else if(mouseX < 300){
    let palavra = "Alegre";
    text(palavra, 200, 200);
  } */
  
}