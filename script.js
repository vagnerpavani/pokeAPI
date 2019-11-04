const url = "https://pokeapi.co/api/v2/pokemon/";

const params = {
    Headers : {
        "content-type" : "aplication/json",
        method : "GET"
    }
};

class Pokemon{
    constructor(){
        this.name = "unknown"
        this.sprite = "empty"
    }
}

const pokemon1 = new Pokemon;

function chama() {
    let busca = document.getElementById("text").value;
    let urlDeBusca = url + busca;
    let pokemonPic;
    

    
    fetch(urlDeBusca , params)
    .then(res => res.json().then( json => {
    pokemon1.name = json.name
    pokemon1.sprite = json.sprites.front_default

    console.log(pokemon1.sprite);
    pokemonPic = document.getElementById("pokemon-sprite");
    pokemonPic.src = pokemon1.sprite;
    document.getElementById("name").innerHTML = "name : " + pokemon1.name;
    }))
};
