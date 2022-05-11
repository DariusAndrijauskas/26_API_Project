// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
// 8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
// 8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => {
        console.log(users);
        let ul = document.createElement('ul');
        let div = document.createElement('div');
        let title = document.createElement('h4');
        let links = document.createElement('span');
        let section = document.querySelector('section');
        let mainText = document.createElement('p');
        let commentsDiv = document.createElement('div');
        users.map(user => {
            links.innerHTML = `User: <a href="./user.html?userId=${user.id}">${user.name}</a> - <a href="./posts.html?userId=${user.id}">more post by user.</a>`;
            links.classList.add('linkai');
        });
        div.classList.add('postas');
        section.append(div);
    });