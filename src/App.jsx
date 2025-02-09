
import { useState } from 'react';
import './App.css';
import { getPokemonListFromApi } from './data/characters';
import { useEffect } from 'react';

function App() {
  const [pokemons, updatePokemons] = useState([]);
  console.log("Renderizo App, ", pokemons);
  useEffect(() => {
    const getData = async () => {
      const pokemons = await getPokemonListFromApi();
      updatePokemons(pokemons);
    };
    getData();

  /** ALTERNATIVA USANDO THEN
   * 
   getPokemonListFromApi().then((pokemons) => {
      updatePokemons(pokemons);
    })
   * */ 

  

  }, []);


  const pokemonApi = pokemons[0] || {};

  


  return (
    <>
      <div className="pokedex__container">
        <header className="pokedex__header">
            <div className="pokedex__title">
                    <svg className="pokedex__title-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.7144 24C29.7144 27.1559 27.156 29.7143 24.0001 29.7143C20.8442 29.7143 18.2858 27.1559 18.2858 24C18.2858 20.8441 20.8442 18.2857 24.0001 18.2857C27.156 18.2857 29.7144 20.8441 29.7144 24Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0001 48C36.0909 48 46.0934 39.0593 47.7571 27.4286H33.7006C32.2885 31.4235 28.4786 34.2857 24.0001 34.2857C19.5217 34.2857 15.7117 31.4235 14.2997 27.4286H0.243164C1.90681 39.0593 11.9094 48 24.0001 48ZM14.2997 20.5714H0.243164C1.90681 8.94071 11.9094 0 24.0001 0C36.0909 0 46.0934 8.94071 47.7571 20.5714H33.7006C32.2885 16.5765 28.4786 13.7143 24.0001 13.7143C19.5217 13.7143 15.7117 16.5765 14.2997 20.5714ZM29.7144 24C29.7144 27.1559 27.156 29.7143 24.0001 29.7143C20.8442 29.7143 18.2858 27.1559 18.2858 24C18.2858 20.8441 20.8442 18.2857 24.0001 18.2857C27.156 18.2857 29.7144 20.8441 29.7144 24Z"/>
                    </svg>
                <h1 className="pokedex__title headline">Pokédex</h1>
            </div>
            <div className="pokedex__header-searchbar">
               <input className="pokedex__searchbar body3" type="search" name="search" id="#" placeholder="Search" />  
                <div className="filter__container">
                    <svg className="filter__container-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3499 40C13.8832 40 13.4999 39.8167 13.1999 39.45C12.8999 39.0833 12.8166 38.6667 12.9499 38.2L14.6499 31.5H8.89988C8.43322 31.5 8.04155 31.3083 7.72488 30.925C7.40822 30.5417 7.31655 30.1167 7.44988 29.65C7.51655 29.3167 7.68322 29.0417 7.94988 28.825C8.21655 28.6083 8.53322 28.5 8.89988 28.5H15.3999L17.6499 19.5H10.8999C10.4332 19.5 10.0416 19.3083 9.72488 18.925C9.40822 18.5417 9.31655 18.1167 9.44988 17.65C9.51655 17.3167 9.68322 17.0417 9.94988 16.825C10.2166 16.6083 10.5332 16.5 10.8999 16.5H18.3999L20.2499 9.1C20.3166 8.76667 20.4749 8.5 20.7249 8.3C20.9749 8.1 21.2666 8 21.5999 8C22.0666 8 22.4416 8.18333 22.7249 8.55C23.0082 8.91667 23.0999 9.33333 22.9999 9.8L21.3499 16.5H30.3999L32.2499 9.1C32.3166 8.76667 32.4749 8.5 32.7249 8.3C32.9749 8.1 33.2665 8 33.5999 8C34.0665 8 34.4415 8.18333 34.7249 8.55C35.0082 8.91667 35.0999 9.33333 34.9999 9.8L33.3499 16.5H39.0999C39.5665 16.5 39.9582 16.6917 40.2749 17.075C40.5916 17.4583 40.6832 17.8833 40.5499 18.35C40.4832 18.6833 40.3166 18.9583 40.0499 19.175C39.7832 19.3917 39.4665 19.5 39.0999 19.5H32.5999L30.3499 28.5H37.0999C37.5665 28.5 37.9582 28.6917 38.2749 29.075C38.5916 29.4583 38.6832 29.8833 38.5499 30.35C38.4832 30.6833 38.3165 30.9583 38.0499 31.175C37.7832 31.3917 37.4665 31.5 37.0999 31.5H29.5999L27.7499 38.9C27.6832 39.1667 27.5416 39.4167 27.3249 39.65C27.1082 39.8833 26.7832 40 26.3499 40C25.8832 40 25.4999 39.8167 25.1999 39.45C24.8999 39.0833 24.8166 38.6667 24.9499 38.2L26.6499 31.5H17.5999L15.7499 38.9C15.6832 39.1667 15.5416 39.4167 15.3249 39.65C15.1082 39.8833 14.7832 40 14.3499 40ZM18.3499 28.5H27.3999L29.6499 19.5H20.5999L18.3499 28.5Z"/>
                        </svg>
                </div>
            </div>
        </header>
        <main>
            <div className="pokemon__container">
                <ul className="pokemon__container-list">
                  <li>
                    <a href={`./detail.html?id=${pokemonApi.id}`}>
                        <header className="pokemon__card-info">
                          <p className="pokemon__card-number caption">#0{pokemonApi.order}</p>
                          <h1 className="pokemon__card-name body3">{pokemonApi.name.charAt(0).toUpperCase() + pokemonApi.name.slice(1)}</h1>
                        </header>
                        <section className="pokemon__card-body">
                          <div className="pokemon__card-image">
                            <img src={pokemonApi.sprites.other['official-artwork'].front_default} alt={`Pokemon ${pokemonApi.name}`} />
                          </div>
                        </section>
                    </a>
                  </li>
                </ul>
            </div>
        </main>
    </div>
    </>
  )
}

export default App
