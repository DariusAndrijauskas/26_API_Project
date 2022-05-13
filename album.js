// 6.    ✅Sukurti naują puslapį album.html ir jame atvaizduoti:
// 6.1.  ✅Albumo pavadinimą.
// 6.2.  ✅Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
// 6.3   Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
// 6.3.1. https://photoswipe.com/
// 6.3.2. https://nanogallery2.nanostudio.org/
// 6.3.3. https://sachinchoolur.github.io/lightgallery.js/
// 6.3.4. Arba bet kurią kitą.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let main = document.querySelector('main');
let ul = document.createElement('ul');
let divas = document.createElement('div');
let title = document.createElement('h4');
let author = document.createElement('a');
let mainText = document.createElement('p');
let commentsDiv = document.createElement('div');
fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`)
    .then(res => res.json())
    .then(album => {
        fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
            .then(res => res.json())
            .then(user => {
                divas.innerHTML += `Title: <strong>${album.title}</strong><br>`;
                divas.innerHTML += `Author: <a href='./user.html?userId=${album.userId}'>${user.name}</a><br>`;
                divas.classList.add('user');
                main.prepend(divas);
                fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.albumId}`)
                    .then(res => res.json())
                    .then(photos => {
                        let items = [];
                        photos.map(photo => {
                            let item = {
                                src: photo.url,
                                srct: photo.thumbnailUrl,
                                title: photo.id.toString()
                            }
                            items.push(item);
                        });
                        jQuery(document).ready(function () {
                            jQuery("#my_nanogallery2").nanogallery2({
                                items: items,
                                thumbnailWidth: 'auto',
                                thumbnailHeight: 200,
                                itemsBaseURL: 'https://nanogallery2.nanostudio.org/samples/',
                                thumbnailBorderVertical: 0,
                                thumbnailBorderHorizontal: 0,
                                thumbnailGutterWidth: 10,
                                thumbnailGutterHeight: 10,
                                locationHash: false
                            });
                        });
                    });
            });
    });