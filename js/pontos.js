function mostrarPontos() {
    textAlign(CENTER)
    textSize(28);
    fill(color(255, 240, 0))
    text(pontos, width / 3, 28)
}

function marcaPontos() {
    if (yAtor < 20) {
        pontos++;
        colidu();
        somDoPonto.play();
    }
}

function pontosMaiorZero() {
    return pontos > 0;
}