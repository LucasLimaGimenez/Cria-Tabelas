//criar os dados a serem inseridos
//---------------0---1---2---3---4---5
const letras = ['a','b','c','d','e','f'];

// recuperar o elemento(HTML) que receberá as letras 
const divDados = document.querySelector('#dados');

// usar um for para percorrer o array e pegar cada conteudo e jogar na pagina html 
for (let i = 0; i < letras.length;i++){

    // criar um elemento(tag) que recebera o conteudo 
    const paragrafo = document.createElement('p');

    //CSS
    paragrafo.classList.add('bg-dark','text-light','p-2','lead');

    // inserir no elemento criado o conteudo do Array
    paragrafo.textContent = letras[i];
    // responsavel por inserir esse conteudo dentro da div 
    divDados.appendChild(paragrafo);
    } 

    