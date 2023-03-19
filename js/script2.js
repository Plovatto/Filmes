 
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
    constructor(id, titulo, ano, genero, duracao, cartaz, sipnose, direcao, elenco, classificacao, avaliacao) {
      this.id = id;
      this.genero = genero;
      this.titulo = titulo;
      this.ano = ano;
      this.duracao = duracao;
      this.cartaz = cartaz;
      this.sipnose = sipnose;
      this.direcao = direcao;
      this.elenco = elenco;
      this.classificacao = classificacao;
      this.avaliacao = avaliacao;
      this.btnDetalhe=null
    }

  
  
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

      
    }
    setBtnDetalhe=()=>{

this.btnDetalhe = document.createElement("button");
this.btnDetalhe.setAttribute("class","btnDetalheFilme");
this.btnDetalhe.setAttribute("id", this.id);
this.btnDetalhe.appendChild(document.createTextNode("Detalhes"));



}
getBtnDetalhe=()=>{
  return this.btnDetalhe
}

    getCard2 =  () => {
      console.log("oi")
    
      let detalheCard = document.createElement("div");
      detalheCard.setAttribute("class","detalheCard");
      
      let imgDetalheDiv = document.createElement("div");
      imgDetalheDiv.setAttribute("class","imgDetalheDiv");

      let detalheImg = document.createElement("img");
      detalheImg.setAttribute("class","detalheImg");
      detalheImg.setAttribute("src",this.cartaz);

      let tituloDetalhe = document.createElement("h1");
      tituloDetalhe.setAttribute("class","TituloDetalhe");
      tituloDetalhe.appendChild(document.createTextNode(this.titulo));

      let detalheText = document.createElement("div");
      detalheText.setAttribute("class","detalheText");

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
      awardsDetalhe.appendChild(document.createTextNode("Prêmios: "+this.awards));

      let avaliacaoDetalhe = document.createElement("p");
      avaliacaoDetalhe.setAttribute("class","avaliacaoDetalhe");
      avaliacaoDetalhe.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));
      
      let plotDetalhe = document.createElement("p");
      plotDetalhe.setAttribute("class","plotDetalhe");
      plotDetalhe.appendChild(document.createTextNode("Sinopse: "+this.sinopse));

      listaFilmes.appendChild(detalheCard);

      imgDetalheDiv.appendChild(detalheImg);

      detalheCard.appendChild(imgDetalheDiv);
      detalheCard.appendChild(detalheText);

      detalheText.appendChild(tituloDetalhe);
      detalheText.appendChild(anoDetalhe);
      detalheText.appendChild(generoDetalhe);
      detalheText.appendChild(duracaoDetalhe);
      detalheText.appendChild(diretorDetalhe);
      detalheText.appendChild(atoresDetalhe);
      detalheText.appendChild(awardsDetalhe);
      detalheText.appendChild(avaliacaoDetalhe);
      detalheText.appendChild(plotDetalhe);
   }
   
  }
 
   
