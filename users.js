// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
// 8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
// 8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let section = document.querySelector('section');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(users => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                users.map(user => {
                    let postCount = posts.filter(post => post.userId==user.id).length;
                    let a = document.createElement('a');
                    let h4 = document.createElement('h4');
                    let h42 = document.createElement('h4');
                    let div = document.createElement('div');
                    let title = document.createElement('h4');
                    let links = document.createElement('span');
                    let mainText = document.createElement('p');
                    let commentsDiv = document.createElement('div');
                    h4.textContent = user.name;
                    h42.textContent = postCount;
                    a.href = `./user.html?userId=${user.id}`
                    div.append(h4, h42);
                    div.classList.add('postas');
                    a.append(div);
                    section.append(a);
                });
            });
    });