// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
// 7.1. Įrašo (post) pavadinimą.
// 7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
// 7.3. Įrašo turinį.
// 7.4. Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.
// // 7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį. Jame bus atvaizduojami visi šio vartotojo įrašai.
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
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
                divas.innerHTML += `Title: ${album.title}<br>`;
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