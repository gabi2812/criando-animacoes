deixe cor ;
let posicaoHorizontal;//x
let posicaoVertical;//y

function setup() {
  
  createCanvas (600, 600);
  background("black");
  cor= color("white");
  posicaoHorizontal = 200;
  posicaoVertical = 200;
 }

function draw(){
  
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 85);
 
 if(mouseX < posicaoHorizontal){
   posicaoHorizontal--;
 }

 if(mouseX > posicaoHorizontal){
  posicaoHorizontal++;
 }
 if(mouseY < posicaoVertical){
  posicaoVertical--;
 }

 if(mouseY > posicaoVertical){
  posicaoVertical++;
 }

 if(mouseIsPressed) {
  cor = color("gray");
 }
  
  
}