function pesquisar() {
    
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

     let campoPesquisa = document.getElementById("campo-pesquisa").value

     // se campoPesquisa for uma string sem nada
     if (!campoPesquisa) {
        section.innerHTML = "<P>Nada foi encontrado. Você precisa digitar uma série!</p>"
        return
     }

     campoPesquisa = campoPesquisa.toLowerCase()
    
     // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ) {
 
            // Constrói o HTML para cada resultado
            resultados += `
            <div class="item-resultado">
             <h2>
                <a href="${dado.videoYoutube}" target="_blank">${dado.titulo}</a>
             </h2>
                <P class="descricao-meta">${dado.descricao}</P>
                <a href=${dado.link} target="_blank">Onde Assistir.</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Insere o HTML dos resultados na seção
    section.innerHTML = resultados;
  }