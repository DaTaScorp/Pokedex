// URL de l'API pour obtenir les Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";

// Fonction pour récupérer la liste des Pokémon
async function fetchPokemonList() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
}

// Fonction pour récupérer les détails d'un Pokémon
async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Fonction pour afficher la liste des Pokémon
async function displayPokemonList() {
    const pokemonList = await fetchPokemonList();
    const listElement = document.getElementById("pokemon-list");

    for (const pokemon of pokemonList) {
        const details = await fetchPokemonDetails(pokemon.url);
        const listItem = document.createElement("li");
        listItem.textContent = pokemon.name;

        // Créer une image pour le Pokémon
        const pokemonImage = document.createElement('img');
        pokemonImage.src = details.sprites.front_default; // URL de l'image
        pokemonImage.alt = pokemon.name;
        pokemonImage.classList.add('pokemon-image');

        // Ajouter l'image au listItem, mais elle sera cachée par défaut
        listItem.appendChild(pokemonImage);

        // Ajouter le listItem à la liste
        listElement.appendChild(listItem);
    }
}

// Appelle la fonction pour afficher les Pokémon quand la page est chargée
document.addEventListener("DOMContentLoaded", displayPokemonList);

