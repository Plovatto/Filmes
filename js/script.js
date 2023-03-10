let search = document.querySelector("#search")
let carrosel = document.querySelector("#carouselExample")


search.addEventListener('input', function() {
  if (search.value === '') {
    carrosel.style.display = 'block';
  } else {
    carrosel.style.display = 'none';
  }
});

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
