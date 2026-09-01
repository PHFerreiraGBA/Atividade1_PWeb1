for (var i = 0; i < 5; i++) {
    const esperaExibicao = (valorAtual) => {
        setTimeout(function () {
            console.log(valorAtual);
        }, 1000);
    };

    esperaExibicao(i)
}