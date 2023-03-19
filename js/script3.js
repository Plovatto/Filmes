
     function card1(){

    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Avatar: The Way of Water`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard1');
     imgContainer.appendChild(img);
     
     titulo1.textContent = response.Title;
     genero1.textContent = response.Genre;
     ano1.textContent = response.Year;
     duracao1.textContent = response.Runtime;
     
    })}
  function card2(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Trick or Treat Scooby-Doo`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard2');
     imgContainer.appendChild(img);
     titulo2.textContent = response.Title;
     genero2.textContent = response.Genre;
     ano2.textContent = response.Year;
     duracao2.textContent = response.Runtime;
      

    });
  };
  function card3(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Thor: Love and Thunder`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard3');
     imgContainer.appendChild(img);
     titulo3.textContent = response.Title;
     genero3.textContent = response.Genre;
     ano3.textContent = response.Year;
     duracao3.textContent = response.Runtime;
      
     
    });
  };
  function card4(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Ant-Man and the Wasp: Quantumania`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard4');
     imgContainer.appendChild(img);
     titulo4.textContent = response.Title;
     genero4.textContent = response.Genre;
     ano4.textContent = response.Year;
     duracao4.textContent = response.Runtime;
      
     
    });
  };
  function card5(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=narvik`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard5');
     imgContainer.appendChild(img);
     
     titulo5.textContent = response.Title;
     genero5.textContent = response.Genre;
     ano5.textContent = response.Year;
     duracao5.textContent = response.Runtime;
      
     
    });
  };
  function card6(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=The Gray Man`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard6');
     imgContainer.appendChild(img);
     
     titulo6.textContent = response.Title;
     genero6.textContent = response.Genre;
     ano6.textContent = response.Year;
     duracao6.textContent = response.Runtime;
      
     
    });
  };
  function card7(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Lightyear`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard7');
     imgContainer.appendChild(img);
     
     titulo7.textContent = response.Title;
     genero7.textContent = response.Genre;
     ano7.textContent = response.Year;
     duracao7.textContent = response.Runtime;
      
     
    });
  };
  function card8(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=Ivanna`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard8');
     imgContainer.appendChild(img);
     
     titulo8.textContent = response.Title;
     genero8.textContent = response.Genre;
     ano8.textContent = response.Year;
     duracao8.textContent = response.Runtime;
      
     
    });
  };
  function card9(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=The Strays`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard9');
     imgContainer.appendChild(img);
     
     titulo9.textContent = response.Title;
     genero9.textContent = response.Genre;
     ano9.textContent = response.Year;
     duracao9.textContent = response.Runtime;
      
     
    });
  };
  function card10(){
  
    const apiUrl = `https://www.omdbapi.com/?apikey=9d6f18b9&type=movie&t=They/Them`;
    console.log(apiUrl);
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
  
     const posterUrl = response.Poster;
     const img = document.createElement('img');
     img.setAttribute("class","img");
     img.src = posterUrl;
     const imgContainer = document.getElementById('imgcard10');
     imgContainer.appendChild(img);
     
     titulo10.textContent = response.Title;
     genero10.textContent = response.Genre;
     ano10.textContent = response.Year;
     duracao10.textContent = response.Runtime;
      
     
    });
  };
  window.onload = function() {
  
    card1();
    card2(); 
    card3(); 
    card4(); 
    card5(); 
    card6(); 
    card7(); 
    card8(); 
    card9(); 
    card10(); 

  };
  