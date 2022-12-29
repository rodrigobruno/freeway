const wCanva = 500;
const hCanva = 400;

function setup() {
    createCanvas(wCanva, hCanva);
    somDaTrilha.loop();
    somDaTrilha.setVolume(0.1);
}

function draw() {

    background(imagemDaEstrada);

    mostraAtor();
    movimentaAtor();
    verificaColisao();

    mostraCarro();
    movimentaCarro();
    voltaPosicaoInicialCarro();

    mostrarPontos();
    marcaPontos();

}