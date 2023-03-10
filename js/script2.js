let input = document.querySelector("#search");
let button = document.querySelector("#buttonsearch");



button.addEventListener("click", function funcao(){
    if(input.value.length>0){
let filmes = new Array();
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9d6f18b9="+input.value)
        .then((resp)=>resp.json())
        .then((resp)=>{
resp.Search.forEach((item)=>{
    let filmes = new Filme
    
});
        });

    }
return false;
});

class Ator{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor{
    constructor(nome, id){
        this.nome = nome;
        this.id = id;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, duracao, cartaz, sipnose, direcao, elenco, classificacao, avaliacao){

        this.id=id;
        this.genero=genero;
        this.titulo=titulo;
        this.ano=ano;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sipnose=sipnose;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;

    }

getCard = async()=>{
    let card = document.createElement("div");
    card.setAttribute("class","card");

    let imgCartaz = document.createElement("img");
    imgCartaz.setAttribute("class","card-img-topz");
    imgCartaz.setAttribute("src",this.cartaz);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body");

    let hCardTitle = document.createElement("h5");
    hCardTitle.setAttribute("class","card-title")

    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");

    divGenero = document.createElement("div");
    divGenero.setAttribute("style","flex-grow:1;");

    let divAnoProducao = document.createElement("div");
    divAnoProducao.setAttribute("style","flex-grow:1;");

    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style","flex-grow:1;");

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
    return card;
    
}


}

