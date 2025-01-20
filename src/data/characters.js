export async function getPokemonListFromApi() {
    const httpResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon"
    );
    const pokemons = await httpResponse.json();
    return pokemons;
}
  

  
export async function getPokemonDetailFromApiByName(name) {
    const httpResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = await httpResponse.json();
    return pokemon;
  }
  