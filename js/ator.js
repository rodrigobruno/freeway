let wAtor = 30;
let hAtor = 26;
let xAtor = 100;
let yAtor = 370;

let colisao = false;
let pontos = 0;

function mostraAtor() {
    image(imagemDoAtor, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor() {
    if (keyIsDown(UP_ARROW)) {
        yAtor -= 3;
    }

    if (keyIsDown(DOWN_ARROW) && yAtor < 370) {
        yAtor += 3;
    }
}

function verificaColisao() {
    for (let i = 0; i < imagemDosCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], wCarro, hCarro, xAtor, yAtor, wAtor / 2);

        if (colisao) {
            colidu();
            somDaColisao.play();
            if (pontosMaiorZero()) {
                pontos--;
            }
        }
    }
}

function colidu() {
    yAtor = 370;
}