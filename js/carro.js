let wCarro = 73;
let hCarro = 40;

let xCarros = [510, 510, 510, 510, 510, 510];
let yCarros = [40, 96, 150, 212, 263, 319];
let velocidadeCarros = [2, 2.5, 3.2, 2, 2.2, 3.2];

function mostraCarro() {
    for (let i = 0; i < imagemDosCarros.length; i++) {
        image(imagemDosCarros[i], xCarros[i], yCarros[i], wCarro, hCarro);
    }
}

function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        if (passouTodaTela(xCarros[i])) {
            xCarros[i] = 510;
        }
    }
}

function passouTodaTela(xCarro) {
    return xCarro < -70;
}