let search = document.querySelector("#search");
let carrosel = document.querySelector("#carouselExample");
let some = document.querySelector("#cardsumir");
let input = document.querySelector("#search");
let button = document.querySelector("#buttonsearch");
let listaFilmes2 = document.querySelector("#listaFilmes2");
let listaFilmes = document.querySelector("#listaFilmes");
favoritosmostrar = document.querySelector(".favoritosmostrar");


let clicar = false;


let filmes;
search.addEventListener('input', function() {
  if (search.value === '') {
    carrosel.style.display = 'block';
    some.style.dysplay = 'block';
    
  } else {
    carrosel.style.display = 'none';
    some.style.display = 'none';
   
  }
});




button.onclick = async ()=>{
  favoritosmostrar.innerHTML="";
  if(input.value.length>0){
    filmes = new Array();
    fetch("https://www.omdbapi.com/?apikey=9d6f18b9&s=" + input.value,{mode:"cors"})
      .then((resp)=>resp.json())
      .then((resp)=>{
        resp.Search.forEach((item)=>{
          let filme = new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            
            null,
            item.Genero,
            null,
            item.Poster,
            null,
            null,
            null,
            null
          );
          filmes.push(filme);
        }); 
        listarFilmes(filmes);
       
 

      });

  }
  return false;
};
let btnfavorite = document.querySelector(".btnfavorite");

let btnDetalheFilme = document.querySelector(".btnDetalheFilme");
 listarFilmes = async (filmes) => {
  
  
  listaFilmes.innerHTML = "";
  if(filmes.length > 0) {
    filmes.forEach(async (filme) => {
      listaFilmes.appendChild(await filme.getCard());
      filme.getBtnDetalhe().onclick=()=>{
        detalhesFilme(filme.id);
      }
    });
  };

};

let detalhesFilme = async(id)=>{ 
  favoritosmostrar.innerHTML="";
  listaFilmes.innerHTML="";
  some.innerHTML="";
  fetch("https://www.omdbapi.com/?apikey=9d6f18b9&i="+id)
  .then((resp)=>resp.json())
  .then((resp)=>{
console.log(resp);
    let filme = new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.Plot,
      resp.Poster,
      resp.Director,
      resp.Actors.split(","),
      resp.imdbRating,
      resp.imdbRating,
      resp.Awards,
      resp.Awards,
      null
     
    );console.log(filme);
  
   filme.getCard2();
    console.log("help");


document.querySelector(".btnfavorite").onclick=()=>{
saveFavorite(filme.id);

}
document.querySelector(".btnfechar").onclick=()=>{

}

}); }


let salvamentodeFilmes = [];

let favIndex = document.querySelector(".favoritosmostrar");

let saveFavorite = (id) => {
  
  console.log("testeFavBtn");
  let filmeFavoritos = localStorage.getItem('filmesFavoritos');
  salvamentodeFilmes = JSON.parse(filmeFavoritos) || [];
  console.log("help2");

  if(!salvamentodeFilmes.includes(id)){
    salvamentodeFilmes.push(id);
    console.log(salvamentodeFilmes);
    salvamentodeFilmes = JSON.stringify(salvamentodeFilmes);
    localStorage.setItem('filmesFavoritos', salvamentodeFilmes);
    console.log("novo");
  }else{
    console.log("repete");
  }

}; 

 let odiodeFetch = (id) => {
 
  fetch("https://www.omdbapi.com/?apikey=9d6f18b9&i="+id)
  .then((resp) => resp.json())
  .then((resp) => {
      favCards(resp.Title , resp.Genre , resp.Year , resp.Poster, null, resp.imdbID)
  })
}

 function paradeclicar(){
  if(clicar===false){

 let filmeFavoritos = localStorage.getItem('filmesFavoritos');
  salvamentodeFilmes = JSON.parse(filmeFavoritos) || [];
  if(salvamentodeFilmes.length > 0){
    salvamentodeFilmes.forEach((id) =>{
      odiodeFetch(id);
    });
  }


listaFilmes.innerHTML="";
listaFilmes2.innerHTML="";
some.innerHTML="";
carrosel.innerHTML="";
  }
  clicar=true;
}


document.querySelector("#navFavoritos").onclick = ()=>{
 paradeclicar();
  }

  let favCards = (titulo , genero , ano , poster, btn, idFav) => {
    
    
    
const cardfavoritos = document.createElement("div");
cardfavoritos.setAttribute("class", "card1");

const imgFavoritos = document.createElement("img");
imgFavoritos.setAttribute("class","card-img-top1");
imgFavoritos.setAttribute("src", poster);

const bodyFavoritos = document.createElement("div");
bodyFavoritos.setAttribute("class", "card-body1");

const textoFavoritos = document.createElement("h5");
textoFavoritos.setAttribute("class", "card-title1");

const detalhesFavoritos = document.createElement("div");
detalhesFavoritos.setAttribute("style", "display:flex; justify-content:space-around;flex-direction: row;");

const detalhesFavoritos2 = document.createElement("div")
detalhesFavoritos2.setAttribute("style", "display:flex; justify-content:space-around;flex-direction: column;");

const generoFavoritos = document.createElement("div");
generoFavoritos.setAttribute("class", "genero1");


const anoFavoritos = document.createElement("div");
anoFavoritos.setAttribute("class","Ano1");

const clasFavoritos = document.createElement("div");
clasFavoritos.setAttribute("class","Clasfav");
let btnDetalhe = document.createElement("button");
btnDetalhe.setAttribute("class","btnDetalheFilme");
btnDetalhe.appendChild(document.createTextNode("Detalhes"));
const btndesfavorite = document.createElement("button");
     btndesfavorite.setAttribute("class","btndesfavorite");
     const imgdesfavorite = document.createElement("img");
     imgdesfavorite.setAttribute("class","imgdesfavorite");
     imgdesfavorite.setAttribute("src","./Imagens/Vectordesfav.png"); 
textoFavoritos.appendChild(document.createTextNode(titulo));
anoFavoritos.appendChild(document.createTextNode(ano));
generoFavoritos.appendChild(document.createTextNode(genero));
// clasFavoritos.appendChild(document.createTextNode(this.classificacao));

bodyFavoritos.appendChild(cardfavoritos);
cardfavoritos.appendChild(imgFavoritos);
cardfavoritos.appendChild(textoFavoritos);
detalhesFavoritos2.appendChild(generoFavoritos) ;
detalhesFavoritos.appendChild(anoFavoritos);
detalhesFavoritos.appendChild(clasFavoritos);
cardfavoritos.appendChild(generoFavoritos);
cardfavoritos.appendChild(clasFavoritos);
cardfavoritos.appendChild(anoFavoritos);



cardfavoritos.appendChild(detalhesFavoritos2);
cardfavoritos.appendChild(detalhesFavoritos);
cardfavoritos.appendChild(btnDetalhe);
btndesfavorite.appendChild(imgdesfavorite); 
cardfavoritos.appendChild(btndesfavorite);

favIndex.appendChild(bodyFavoritos);

btnDetalhe.onclick = () => {
  detalhesFilme(idFav);
  favIndex.innerHTML = "";

  };

btndesfavorite.onclick=()=>{
  salvamentodeFilmes=JSON.parse(localStorage.getItem('filmesFavoritos'))|| [];
let index = salvamentodeFilmes.indexOf(idFav);
if(index >-1){
  salvamentodeFilmes.splice(index, 1);
}

localStorage.setItem('filmesFavoritos',JSON.stringify(salvamentodeFilmes));
favIndex.removeChild(bodyFavoritos);

}



}




