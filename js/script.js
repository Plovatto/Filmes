let search = document.querySelector("#search");
let carrosel = document.querySelector("#carouselExample");
let some = document.querySelector("#cardsumir");

search.addEventListener('input', function() {
  if (search.value === '') {
    carrosel.style.display = 'block';
    some.style.dysplay = 'block';
  } else {
    carrosel.style.display = 'none';
    some.style.display = 'none';
  }
});

let input = document.querySelector("#search");
let button = document.querySelector("#buttonsearch");

button.onclick = async ()=>{
  if(input.value.length>0){
    let filmes = new Array();
    fetch("https://www.omdbapi.com/?apikey=9d6f18b9&s=" + input.value,{mode:"cors"})
      .then((resp)=>resp.json())
      .then((resp)=>{
        resp.Search.forEach((item)=>{
          let filme = new Filme(
            item.imdbID,
            item.Title,
            item.Year,
            null,
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


let listarFilmes = async (filmes) => {
  let listaFilmes = await document.querySelector("#listaFilmes");
  
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
  fetch("https://www.omdbapi.com/?apikey=9d6f18b9&i="+id)
  .then((resp)=>resp.json())
  .then((resp)=>{

    let filme =new Filme(
      resp.imdbID,
      resp.Title,
      resp.Year,
      resp.Genre.split(","),
      resp.Runtime,
      resp.Poster,
      resp.Plot,
      resp.Director,
      resp.Actors.split(","),
      resp.Awards,
      resp.imbdRating
    )
    let listaFilmes2 = document.querySelector("#listaFilmes2");
   this.getCard2();
    listarfilmes.style.display = "none";

  
}); return false;}