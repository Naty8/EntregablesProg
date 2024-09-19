// URL de la API pública  
const apiURL = "https://rickandmortyapi.com/api/episode/26";  

// Función para obtener los personajes de la API  
async function fetchCharacters() {  
    try {  
        const response = await fetch(apiURL);  
        const data = await response.json();  
        // Obtener los URLs de los personajes  
        const characterUrls = data.characters;  

        // Llamar a la función para obtener los detalles de los personajes  
        const characters = await Promise.all(characterUrls.map(url => fetch(url).then(res => res.json())));  

        // Llamar a la función para mostrar los personajes  
        displayCharacters(characters); // Cambiado de data.characters a characters  
    } catch (error) {  
        console.error('Error al cargar los personajes:', error);  
    }     
}  

// Función para mostrar los personajes en formato de tarjeta(card)  
function displayCharacters(characters) {  
    const charactersContainer = document.getElementById('characters');  
    
    // Limpiar el contenedor antes de agregar nuevas tarjetas  
    charactersContainer.innerHTML = ''; // Limpia el contenedor antes de mostrar nuevos personajes  

    characters.forEach(character => {  
        const characterCard = document.createElement('div');  
        characterCard.classList.add('card');   
        characterCard.innerHTML = `  
            <img src="${character.image}" alt="Imagen de ${character.name}">  
            <h3>${character.name}</h3>  
            <p>Especie: ${character.species}</p>  
            <p>Estado: ${character.status}</p>  
            <p>Ubicación: ${character.location.name}</p>  
        `;  
        charactersContainer.appendChild(characterCard); // Se corrige el uso de appendChild  
    });  
}  

// Llamar a la función para obtener los datos al cargar la página  
fetchCharacters();  
