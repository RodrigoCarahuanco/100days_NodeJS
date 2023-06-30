const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLresponse = document.querySelector("#app");
const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users)=>{
        users.forEach((user)=>{
            let element = document.createElement("li");
            element.appendChild(
                document.createTextNode(`${user.name} - ${user.email}`)
            );
            ul.appendChild(element);
        });

        HTMLresponse.appendChild(ul);

        //const tpl = users.map(user => `<li>${user.name} - ${user.email}</li>`);
        //HTMLresponse.innerHTML = `<li>${tpl}</li>`;
    });