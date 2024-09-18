//URL de la API publica
const apiURL = "https://rickandmortyapi.com/api/character";

//Funcion para obtener datos desde la API
function getCharacters() {
    fetch(apiURL)
    .then(response=> {
        if(!response.ok) { 
            throw new Error('Network response was not ok?);
                            }
                            return response.json();
    })
        .then(data=> {
        const characters = data.results; displayCharacters(characters);
        })
    .catch(error=> console.error('Error al obtener los datos:', error));
}
//Funcion para mostrar los datos en formato de tarjeta(card)
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
