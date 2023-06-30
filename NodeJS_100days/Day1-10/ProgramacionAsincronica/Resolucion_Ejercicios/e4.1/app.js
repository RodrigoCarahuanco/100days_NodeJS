const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLresponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users)=>{
        const tpl = users.map(user => `<li>${user.name} - ${user.email}</li>`);
        HTMLresponse.innerHTML = `<li>${tpl}</li>`;
    });