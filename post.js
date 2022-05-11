// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
// 7.1. Įrašo (post) pavadinimą.
// 7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
// 7.3. Įrašo turinį.
// 7.4. Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.
// // 7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį. Jame bus atvaizduojami visi šio vartotojo įrašai.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let section = document.querySelector('section');
fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(res => res.json())
    .then(post => {
        let ul = document.createElement('ul');
        let div = document.createElement('div');
        let title = document.createElement('h4');
        let links = document.createElement('span');
        let mainText = document.createElement('p');
        let commentsDiv = document.createElement('div');
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then(res => res.json())
            .then(user => {
                links.innerHTML = `User: <a href="./user.html?userId=${user.id}">${user.name}</a> - <a href="./posts.html?userId=${user.id}">more post by user.</a>`;
                links.classList.add('linkai');
            });
            fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then((res) => res.json())
            .then(comments => {
                comments.map(comment => {
                    let li = document.createElement('li');
                    li.innerHTML = `User: ${comment.email} says:<br>${comment.body}`;
                    ul.append(li);
                });
            });
            let span = document.createElement('span');
            span.textContent = `Show Comments`;
            span.addEventListener('click', e => {
                if (commentsDiv.className === `hidden`) {
                commentsDiv.className = `visible`;
                span.textContent = `Hide Comments`;
            } else if (commentsDiv.className === `visible`) {
                commentsDiv.className = `hidden`;
                span.textContent = `Show Comments`;
            }
        });
        commentsDiv.className = `hidden`;
        commentsDiv.append(span, links, ul);
        title.textContent = post.title;
        mainText.textContent = post.body;
        div.classList.add('postas');
        div.append(title, mainText, commentsDiv);
        section.append(div);
    });