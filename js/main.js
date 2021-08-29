async function getPokeInfo(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = await response.json();
  return data;
}

async function init() {
  const pokemon = await getPokeInfo(150);
  window.pokeImage.setAttribute("src", pokemon.sprites.front_default);
  window.pokeName.textContent = pokemon.name;
}

function updatePokemon(pokemon) {
  window.pokeImage.setAttribute("src", pokemon.sprites.front_default);
  window.pokeName.textContent = pokemon.name;
}

window.onload = () => {
  init();
  window.search.addEventListener("change", async () => {
    const pokemon = await getPokeInfo(window.search.value);
    updatePokemon(pokemon);
  });
};
