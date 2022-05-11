const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let main = document.querySelector('main');
let ul = document.createElement('ul');
let div = document.createElement('div');
let title = document.createElement('h4');
let author = document.createElement('a');
let mainText = document.createElement('p');
let commentsDiv = document.createElement('div');
fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    .then(res => res.json())
    .then(user => {
        div.innerHTML += `Name: ${user.name}<br>`;
        div.innerHTML += `Username: ${user.username}<br>`;
        div.innerHTML += `E-mail: <a href="mailto:${user.email}">${user.email}</a><br>`;
        div.innerHTML += `Address: <a href='https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat}%2C${user.address.geo.lng}' target='_blank'>${user.address.street} st., ${user.address.suite}, ${user.address.city} City, ${user.address.zipcode}</a><br>`;
        div.innerHTML += `Phone: ${user.phone}<br>`;
        div.innerHTML += `Website: <a href='${user.website}'>${user.website}</a><br>`;
        div.innerHTML += `Company Name: ${user.company.name}<br>`;
    });
div.classList.add('user');
main.append(div);
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
    .then(res => res.json())
    .then(posts => {
        posts.map(post => {
            let a = document.createElement('a');
            let div = document.createElement('div');
            let title = document.createElement('h4');
            let mainText = document.createElement('p');
            title.textContent = 'Post: ' + post.title;
            mainText.textContent = post.body;
            div.classList.add('post');
            a.href = `./post.html?postId=${post.id}`
            a.append(div);
            div.append(title, mainText);
            main.append(a);
        });
    });
fetch(`https://jsonplaceholder.typicode.com/albums?userId=${params.userId}`)
    .then(res => res.json())
    .then(albums => {
        albums.map(album => {
            console.log(album);
            let a = document.createElement('a');
            let div = document.createElement('div');
            let title = document.createElement('h4');
            let mainText = document.createElement('p');
            title.textContent = 'Album: ' + album.title;
            mainText.textContent = album.body;
            div.classList.add('post');
            a.href = `./album.html?albumId=${album.id}`
            a.append(div);
            div.append(title, mainText);
            main.append(a);
        });
    });