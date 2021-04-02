// recuperar os campos do formulário
const campos = [
    document.querySelector('#form-nome'),
    document.querySelector('#form-tipo'),
    document.querySelector('#form-credito'),
    document.querySelector('#form-saldo'),
]


// recuperando a tabela - será nela que os dados digitados serão inseridos
const tbody = document.querySelector('tbody');

// recuperar o form - cancelar evento do form - grava os dados na tabela 
document.querySelector('form').addEventListener('submit',function(evento){
    // cancelar o submit - AQUI ELE VIROU EVENTO 
    evento.preventDefault();

    //criar a linha da tabela
    const tr = document.createElement('tr');

    campos.forEach((campo) => {
        // criar tds para cada elementos do array - pois elas serão inseridas na tr 
        const td = document.createElement('td');
        // inserir como conteudo os valores digitados
        td.textContent = campo.value;
        // inserir a td na tr 
        tr.appendChild(td);

    });

    const td = document.createElement('td');
    td.textContent = (Number(campos[2].value) + Number(campos[3].value));
    tr.appendChild(td);

    tbody.appendChild(tr);

    // limpar o form 
    this.reset();

    //foco no campo
    campos[0].focus();
});