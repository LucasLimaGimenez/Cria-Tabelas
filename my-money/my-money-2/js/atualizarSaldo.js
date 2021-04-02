

//recuperar as operações cadastradas
// para pegar todas as operações usar querySelectorAll()
const operacoes = document.querySelectorAll('.operacao');

// usar um for para percorrer o array e para cada conteudo/indice execute uma função
//foreach - foi criado para percorrer os arrays
// o dados do forEach será usado na função - ele receberá as informações do array
operacoes.forEach((dados) => {
    // recuperar os dados e converter em números -- Number() --- parseFloat() -- parseInt() 
    const valorCreditado = Number(dados.querySelector('.valor-credito').textContent);
    const saldoAnterior = Number(dados.querySelector('.valor-anterior').textContent);
    const saldoAtualizado = (valorCreditado + saldoAnterior);

    dados.querySelector('.saldo-atual').textContent = saldoAtualizado.toFixed(2);
});
