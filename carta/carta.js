const mensagem = `
Meu amor,
Hoje fazem UM ANO e UM MÊS que estamos juntos meu amor!
Me desculpe fazer esse presente um pouco tarde demais.
Eu estava sem ideias do que fazer.
Até que pensei em te dar uma "cartinha" um pouco diferenciada.
Eu só queria dizer que eu te amo muito meu amor!
E que eu passo as noites em claro imaginando como estaremos daqui um tempo.
Com nossa casa, nossas coisas, viagens.. ETC.
Eu quero viver tudo isso com você meu amor, só com você.

Te amo!
`;

let i = 0;

function escreverTexto() {
    if (i < mensagem.length) {
        document.getElementById("texto").innerHTML += mensagem.charAt(i);
        i++;
        setTimeout(escreverTexto, 40);
    }
}

function abrirCarta() {
    const envelope = document.querySelector(".envelope");
    envelope.classList.add("aberto");

    setTimeout(() => {
        escreverTexto();
    }, 600);
}