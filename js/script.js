let search = document.querySelector("#search");
let carrosel = document.querySelector("#carouselExample");
let some = document.querySelector("#cardsumir");
let input = document.querySelector("#search");
let button = document.querySelector("#buttonsearch");
listarFilmes2 = document.querySelector("#listarfilmes2");
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
let listaFilmes = document.querySelector("#listaFilmes");
let btnDetalheFilme = document.querySelector(".btnDetalheFilme");
let listarFilmes = async (filmes) => {
  
  
  listaFilmes.innerHTML = "";
  if(filmes.length > 0) {
    filmes.forEach(async (filme) => {
      listaFilmes.appendChild(await filme.getCard());
      filme.getBtnDetalhe().onclick=()=>{
        detalhesFilme(filme.id);
      }
    });
  }
  return false;
};
let filmeFavoritos = localStorage.getItem('filmesFavoritos');
filmesFavoritos=JSON.parse(filmesFavoritos);
 filmes=new Array();
filmesFavoritos.forEach((item)=>{

let filme = new Filme(

 item.id,
 item.titulo,
 item.ano,
 item.genero,
 item.duracao,
 item.cartaz,
 item.direcao,
 item.elenco,
 item.classificacao,
 item.avaliacao
  
);
filmes.push(filme);

});
listarFilmes(filmes);


function saveFavorite(){

let filmeFavoritos = localStorage.getItem('filmesFavoritos');
var filmes = JSON.parse(favoritos);
filmes,push(filme);
filmes=JSON.stringify(filmes);
console.log(favoritoobj.filmes);
localStorage.setItem('filmesFavoritos',filmes);

};

let navFavoritos = document.querySelector("#navFavoritos");
navFavoritos.onclick=()=>{
  saveFavorite();

}

let detalhesFilme = async(id)=>{ 
  
  listaFilmes.innerHTML="";
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




document.querySelector("#listafilme2").appendChild(filme.getCard2());
document.querySelector(".btnfechar").onclick=()=>{


  document.querySelector("#listafilmes").style.display="flex";
 
  document.querySelector("#listafilmes2").innerHTML="";
  document.querySelector("#listafilmes2").style.display="none";
  

}
document.querySelector(".btnfavorite").onclick=()=>{
saveFavorite(filme);

}
 document.querySelector("#listafilmes").style.display="none";
document.querySelector("#listafilmes2").style.display="flex";



 
}); return false;}


