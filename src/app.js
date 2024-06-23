let chave = 3;

function removeItemsResultado() {
    var parent = document.getElementById('resultado');
 
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function exibirResultado(resultado){
    let campoResultado = document.getElementById('resultado')
    let campoResultadoDiv = document.createElement('div');

    campoResultado.style = 'display: flex; flex-direction: column; justify-content: space-between; text-align: start;';
    campoResultadoDiv.innerHTML = resultado;
    campoResultadoDiv.style = 'align-items: start; color: #495057; font-size: 24px; margin-top: 10p0x; height: 50vh;';
    campoResultado.appendChild(campoResultadoDiv);

    let botaoCopiar = document.createElement('button');
    botaoCopiar.textContent = 'Copiar texto';
    botaoCopiar.style = 'margin-top: 10px; font-size: 16px; font-weight: 600; padding: 20px 110px;border-radius: 20px; cursor: pointer; transition: 0.2s; border: solid 1px #0A3871; color: #0A3871; background-color: #D8DFE8;';
    botaoCopiar.onclick = function() {
        navigator.clipboard.writeText(resultado);
    }
    campoResultado.appendChild(botaoCopiar);
}


function descriptografarTexto() {
    let texto = document.getElementById("texto").value;
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charCodeAt(i);
        let novaLetra = letra - parseInt(chave);
        resultado += String.fromCharCode(novaLetra);
    }
    removeItemsResultado();
    exibirResultado(resultado);
}

function criptografarTexto() {
    let texto = document.getElementById("texto").value;
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charCodeAt(i);
        let novaLetra = letra + parseInt(chave);
        resultado += String.fromCharCode(novaLetra);
    }
    removeItemsResultado();
    exibirResultado(resultado);


}
