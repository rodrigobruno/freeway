let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDosCarros;
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
    imagemDaEstrada = loadImage('./imgs/estrada.png');
    imagemDoAtor = loadImage('./imgs/ator-1.png');
    imagemDoCarro = loadImage('./imgs/carro-1.png');
    imagemDoCarro2 = loadImage('./imgs/carro-2.png');
    imagemDoCarro3 = loadImage('./imgs/carro-3.png');
    imagemDosCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro2, imagemDoCarro, imagemDoCarro3];

    somDaTrilha = loadSound('./sounds/trilha.mp3');
    somDaColisao = loadSound('./sounds/colidiu.mp3');
    somDoPonto = loadSound('./sounds/pontos.wav');
}