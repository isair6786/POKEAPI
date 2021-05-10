var description;

let url = "https://pokeapi.co/api/v2/pokemon/";
let UrlDescription = "https://pokeapi.co/api/v2/characteristic/";

async function setData() {
    for (let id = 1; id <= 151; id++) {

        const data = await fetch(url + id);
        var json = await data.json();
        var array = await json;
        console.log(array)
        const body = document.querySelector('#PokedexContainer');
        const PokemonData = document.createElement("div");

        PokemonData.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'text-center', 'p-4');
        PokemonData.innerHTML = `
        <div class="Card-Pokemon" id="pokemon${array.id}">
            <div class="circle"></div>
            <div class="Card-Content">
                <div class="header-card">
                    <h1 align="left">${array.name}</h1>
                    <h1 align="right">${array.id}</h1>
                </div>
            <img src="${array["sprites"]["versions"]["generation-iii"]["firered-leafgreen"]["front_default"]}" alt="">
                <p><strong>Weight : </strong> ${array.weight}<br>
                <strong>Height : </strong> ${array.height}
                </p>
                <div id="types${array.id}">
                
                </div>
                
            </div>
        </div>
    </div>
                    `;
        body.appendChild(PokemonData);
        const types = document.querySelector('#types' + array.id)
        const DataTypes = array.types;

        DataTypes.forEach(element => {
            //Determinamos si el tipo es unos de los principales y lo añadimos 
            SetClassCard(element["type"]["name"], array.id);
            const span = document.createElement('span');
            span.classList.add('tag-' + element["type"]["name"], 'm-2');
            span.textContent = (element["type"]["name"]) + "";

            types.appendChild(span);
        });

        //     });
        // console.log(id);

    }
}

setData();
//functions
function SetClassCard(type, id) {
    const CardPokemon = document.querySelector('#pokemon' + id);
    //validamos que no tenga una clase agregada
    if (CardPokemon.classList.length >= 2) {
        return;
    }
    switch (type) {
        case 'grass':
            CardPokemon.classList.add(type)
            break;
        case 'fire':
            CardPokemon.classList.add(type)
            break;
        case 'water':
            CardPokemon.classList.add(type)
            break;
        case 'poison':
            CardPokemon.classList.add(type)
            break;
        case 'electric':
            CardPokemon.classList.add(type)
            break;
        case 'bug':
            CardPokemon.classList.add(type)
            break;
        case 'normal':
            CardPokemon.classList.add(type)
            break;
        case 'rock':
            CardPokemon.classList.add(type)
            break;
        case 'ground':
            CardPokemon.classList.add(type)
            break;
        case 'fighting':
            CardPokemon.classList.add(type)
            break;
        case 'psychic':
            CardPokemon.classList.add(type)
            break;
        case 'fairy':
            CardPokemon.classList.add(type)
            break;
        case 'ice':
            CardPokemon.classList.add(type)
            break;
        case 'dragon':
            CardPokemon.classList.add(type)
            break;




    }

}