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
            item.Genero,
            null,
            item.Poster,
            null,
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


let detalhesFilme = async(id)=>{ 
  
  listaFilmes.innerHTML="";
  fetch("https://www.omdbapi.com/?apikey=9d6f18b9&i="+id)
  .then((resp)=>resp.json())
  .then((resp)=>{

    let filme = new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.Poster,
      resp.Director,
      resp.Actors.split(","),
      resp.Awards,
      resp.imbdRating,
      resp.Plot
     
    );
  
   filme.getCard2();
   

 
}); return false;}


