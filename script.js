//URL de la API publica
const apiURL = "https://rickandmortyapi.com/api/character";

//Funcion para obtener los personajes de la API
async function fetchCharacters() {
    fetch(apiURL)
    try {
       const response = await fetch(apiURL);
       const data = await response.json();
  // Llamar a la función para mostrar los personajes  
        displayCharacters(data.results);  
    } catch (error) {  
        console.error('Error al cargar los personajes:', error);  
    }     
}
//Funcion para mostrar los personajes en formato de tarjeta(card)
function displayCharacters(characters){
    const charactersContainer = document.getElementById('characters');
    charactersContainer.innerHTML ="";
    //Limpiar el contenedor antes de agregar nuevas tarjetas
    users.forEach(character=>{
      const characterCard= document.createElement('div');
      characterCard.classList.add('card'); 
      characterCard.innerHTML= `<img src="${character.image}" alt="Imagen de ${character.name}">
      <h3>${character.name}</h3>
      <p>Especie: ${character.spceies}</p>
      <p>Estado: ${character.status}</p>
      <p>Ubicacion: ${character.location.name}</p>´;
      charactersContainer.appendChild(characterCard);

    });
}
//Llamar a la funcion para obtenerlos datos al cargar la pagina
getCharacters();
