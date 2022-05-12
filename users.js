// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
// 8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
// 8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let section = document.querySelector('section');
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => {
        users.map(user => {
            console.log(user);
            let ul = document.createElement('ul');
            let div = document.createElement('div');
            let title = document.createElement('h4');
            let links = document.createElement('span');
            let mainText = document.createElement('p');
            let commentsDiv = document.createElement('div');
            div.innerHTML += `Name: ${user.name}<br>`;
            div.innerHTML += `Username: ${user.username}<br>`;
            div.innerHTML += `E-mail: <a href="mailto:${user.email}">${user.email}</a><br>`;
            div.innerHTML += `Address: <a href='https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat}%2C${user.address.geo.lng}' target='_blank'>${user.address.street} st., ${user.address.suite}, ${user.address.city} City, ${user.address.zipcode}</a><br>`;
            div.innerHTML += `Phone: ${user.phone}<br>`;
            div.innerHTML += `Website: <a href='${user.website}'>${user.website}</a><br>`;
            div.innerHTML += `Company Name: ${user.company.name}<br>`;
            links.innerHTML = `User: <a href="./user.html?userId=${user.id}">${user.name}</a> - <a href="./posts.html?userId=${user.id}">more post by user.</a>`;
            links.classList.add('linkai');
        });
        div.classList.add('postas');
        section.append(div);
    });