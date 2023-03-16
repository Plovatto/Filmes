 
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
      divDetalhes.setAttribute("style", "display:flex; justify-content:space-around;");
  
      const divGenero = document.createElement("div");
      divGenero.setAttribute("style", "flex-row:1;");
  
      const divAnoProducao = document.createElement("div");
      divAnoProducao.setAttribute("style", "flex-row:1;");
  
      const divClassificacao = document.createElement("div");
      divClassificacao.setAttribute("style", "flex-row:1;");
  


      hCardTitle.appendChild(document.createTextNode(this.titulo));
      divAnoProducao.appendChild(document.createTextNode(this.ano));
      divGenero.appendChild(document.createTextNode(this.genero));
      divClassificacao.appendChild(document.createTextNode(this.classificacao));
  
      divDetalhes.appendChild(divGenero);
      divDetalhes.appendChild(divAnoProducao);
      divDetalhes.appendChild(divClassificacao);
      card.appendChild(imgCartaz);
      card.appendChild(cardBody);
      cardBody.appendChild(hCardTitle);
      cardBody.appendChild(divDetalhes);

      this.setBtnDetalhe();
      cardBody.appendChild(this.setBtnDetalhe())

 
      return card;

      
    };
  }
 class Detalhes{
    constructor(id, titulo, ano, genero, duracao, cartaz, sipnose, direcao, elenco, classificacao, avaliacao, btnDetalhe){
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

setBtnDetalhe=()=>{

this.btnDetalhe = document.createElement("button");
this.btnDetalhe.appendChild(document.createTextNode("Detalhes"));
this.btnDetalhe.setAttribute("id, this.id");
this.btnDetalhe.setAttribute("class","bntDetalheFilme");


}
getBtnDetalhe=()=>{
  return this.btnDetalhe
}
   }

