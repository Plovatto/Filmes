 
  class Ator {
    constructor(id, nome) {
      this.nome = nome;
      this.id = id;
    }
  }
  
  class Diretor {
    constructor(nome, id) {
      this.nome = nome;
      this.id = id;
    }
  }
  
  class Filme {
    constructor(id, titulo, ano, genero, duracao, sipnose, cartaz, direcao, elenco, avaliacao,classificacao,  premios, btnDetalhe,btnfavorite ) {
      this.id = id;
      this.titulo = titulo;
      this.ano = ano;
      this.genero = genero;
      this.duracao = duracao;
      this.cartaz = cartaz;
      this.direcao = direcao;
      this.elenco = elenco;
      this.classificacao = classificacao;
      this.avaliacao = avaliacao;
      this.premios = premios;
      
      this.sipnose = sipnose;
      this.btnDetalhe=null;
      this.btnfavorite=null;
    }

  
  //card de pesquisar
    getCard = async () => {

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const imgCartaz = document.createElement("img");
      imgCartaz.setAttribute("class", "card-img-top");
      imgCartaz.setAttribute("src", this.cartaz);
  
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
  
      const hCardTitle = document.createElement("h5");
      hCardTitle.setAttribute("class", "card-title");
  
      const divDetalhes = document.createElement("div");
      divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;flex-direction: row;");

      const divDetalhes2 = document.createElement("div")
      divDetalhes2.setAttribute("style", "display:flex; justify-content:space-around;flex-direction: column;");

      const divGenero = document.createElement("div");
      divGenero.setAttribute("class", "genero");

      const divAnoProducao = document.createElement("div");
      divAnoProducao.setAttribute("class","Ano");
  
      const divClassificacao = document.createElement("div");
      divClassificacao.setAttribute("class","Classifica");
      

      hCardTitle.appendChild(document.createTextNode(this.titulo));
      divAnoProducao.appendChild(document.createTextNode(this.ano));
      divGenero.appendChild(document.createTextNode(this.genero));
      divClassificacao.appendChild(document.createTextNode(this.classificacao));
  
      divDetalhes2.appendChild(divGenero);
      divDetalhes.appendChild(divAnoProducao);
      divDetalhes.appendChild(divClassificacao);
      card.appendChild(imgCartaz);
      card.appendChild(cardBody);
      cardBody.appendChild(hCardTitle); 
      cardBody.appendChild(divDetalhes2);
      cardBody.appendChild(divDetalhes);

      this.setBtnDetalhe(); 
      cardBody.appendChild(this.getBtnDetalhe());

      return card;

    };

    //criar botão detalhes
setBtnDetalhe=()=>{
this.btnDetalhe = document.createElement("button");
this.btnDetalhe.setAttribute("class","btnDetalheFilme");
this.btnDetalhe.setAttribute("id", this.id);
this.btnDetalhe.appendChild(document.createTextNode("Detalhes"));

};

getBtnDetalhe=()=>{
  return this.btnDetalhe;
};

//criar o card detalhes
    getCard2 =  () => {
      
      let cardDetalhe = document.createElement("div");
      cardDetalhe.setAttribute("class","cardDetalhe");
      
      let imgDetalhe = document.createElement("div");
      imgDetalhe.setAttribute("class","imgDetalhe");

      let Imginserc = document.createElement("img");
      Imginserc.setAttribute("class","Imginserc");
      Imginserc.setAttribute("src",this.cartaz);

      let lineDetalhe = document.createElement("hr");
      lineDetalhe.setAttribute("class","lineDetalhe");

      let titleDetalhe = document.createElement("h2");
      titleDetalhe.setAttribute("class","titleDetalhe");
      titleDetalhe.appendChild(document.createTextNode(this.titulo));

      let textoDetalhe = document.createElement("div");
      textoDetalhe.setAttribute("class","textoDetalhe");

      let anoDetalhe = document.createElement("p");
      anoDetalhe.setAttribute("class","anoDetalhe");
      anoDetalhe.appendChild(document.createTextNode("Ano: "+this.ano));


      let generoDetalhe = document.createElement("p");
      generoDetalhe.setAttribute("class","generoDetalhe");
      generoDetalhe.appendChild(document.createTextNode("Gênero: "+this.genero));

      let duracaoDetalhe = document.createElement("p");
      duracaoDetalhe.setAttribute("class","duracaoDetalhe");
      duracaoDetalhe.appendChild(document.createTextNode("Duração: "+this.duracao));

      let diretorDetalhe = document.createElement("p");
      diretorDetalhe.setAttribute("class","diretorDetalhe");
      diretorDetalhe.appendChild(document.createTextNode("Direção: "+this.direcao));

      let atoresDetalhe = document.createElement("p");
      atoresDetalhe.setAttribute("class","atoresDetalhe");
      atoresDetalhe.appendChild(document.createTextNode("Elenco: "+this.elenco));

      let awardsDetalhe = document.createElement("p");
      awardsDetalhe.setAttribute("class","awardsDetalhe");
      awardsDetalhe.appendChild(document.createTextNode("Prêmios: "+this.premios));

      let avaliacaoDetalhe = document.createElement("p");
      avaliacaoDetalhe.setAttribute("class","avaliacaoDetalhe");
      avaliacaoDetalhe.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));
      
      let plotDetalhe = document.createElement("p");
      plotDetalhe.setAttribute("class","plotDetalhe");
      plotDetalhe.appendChild(document.createTextNode("Sinopse: "+this.sipnose));

     const btnfavorite = document.createElement("button");
     btnfavorite.setAttribute("class","btnfavorite");

     const imgfavorite = document.createElement("img");
     imgfavorite.setAttribute("class","imgfavorite");
     imgfavorite.setAttribute("src","./Imagens/Vector.png"); 


      listaFilmes.appendChild(cardDetalhe);
      imgDetalhe.appendChild(Imginserc);
      cardDetalhe.appendChild(imgDetalhe);
      cardDetalhe.appendChild(textoDetalhe);
      textoDetalhe.appendChild(titleDetalhe);
      textoDetalhe.appendChild(anoDetalhe);
      textoDetalhe.appendChild(generoDetalhe);
      textoDetalhe.appendChild(duracaoDetalhe);
      textoDetalhe.appendChild(diretorDetalhe);
      textoDetalhe.appendChild(atoresDetalhe);
      textoDetalhe.appendChild(awardsDetalhe);
      textoDetalhe.appendChild(avaliacaoDetalhe);
      textoDetalhe.appendChild(plotDetalhe);     
      btnfavorite.appendChild(imgfavorite); 
      cardDetalhe.appendChild(btnfavorite);

   };

  };

   
