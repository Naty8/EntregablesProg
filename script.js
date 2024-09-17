//URL de la API publica
const apiURL=https://jsonplaceholder.typicode.com/posts;

//Funcion para obtener datos desde la API
function getsUsers() {
    fetch(https://jsonplaceholder.typicode.com)
    .then(response=> response.json())
    .then(data=>{
        const users= data.results; displayUsers(users);
    })
    .catch(error=> console.error('Error al obtener los datos:', error));
}
//Funcion para mostrar los datos en formato de tarjeta(card)
function displayUsers(users){
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML ="";
    //Limpiar el contenedor antes de agregar nuevas tarjetas
    users.forEach(user=>{
      const userCard= document.createElement('div');
      userCard.classList.add('card'); 
      userCard.innerHTML= `<img src="${user.picture.large}" alt="Imagen de ${user.name.first}">
      <h3>${user.name.first}${user.name.last}</h3>
      <p>${user.location.city}, ${user.location.country}</p>
      <p>${user.email}</p>`;
      usersContainer.appendChild(userCard);

    });
}
//Llamar a la funcion para obtenerlos datos al cargar la pagina
getsUsers();
