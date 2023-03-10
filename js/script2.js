let input = document.querySelector("#search");
let button = document.querySelector("#buttonsearch");

button.onclick=()=>{

    if(input.value.length>0){
        console.log(input.value);
    }
    return false;
}

button.onclick=()=>{
    if(input.value.length>0){

        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9d6f18b9="+input.value,{mode:"cors"})
        .then((resp)=>resp.json()).then((resp)=>{console.log(response);
        })

    }
return false;
}
