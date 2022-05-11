// 1.   ✅Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
// 1.1. ✅Pavadinimą.
// 1.2. ✅Pastraipą su įrašo (post) turiniu.
// 1.3. ✅Autorių. Tai turi būti nuoroda. Kol kas ji gali niekur nevesti.
// 2.   ✅Po kiekvienu įrašu (post) gali būti komentarų (sukurti variantus įrašui, kuris neturi komentarų, kuris turi vieną komentarą ir kuris turi daugiau nei vieną komentarą). Kiekvienas komentaras turi:
// 2.1. ✅Komentaro pavadinimą.
// 2.2. ✅Komentaro turinį - pastraipą.
// 2.3. ✅Komentarą parašiusio asmens el. pašto adresą.
// 3.   ✅Sukurti naują puslapį user.html, kuriame bus atvaizduojama vartotojo informacija:
// 3.1. ✅Pilnas vardas.
// 3.2. ✅Vartotojo vardas / nick'as.
// 3.3. ✅El. paštas.
// 3.4. ✅Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps. Kol kas naudoti bet kokią Google Map vietovę.
// 3.5. ✅Telefono numeris.
// 3.6. ✅Internetinio puslapio adresas.
// 3.7. ✅Įmonės, kurioje dirba, pavadinimas.
// 4.   ✅Šiame puslapyje turės būti atvaizduojama:
// 4.1. ✅Visi vartotojo parašyti įrašai (posts). Post'ų įrašuose nereikia atvaizduoti komentarų. Kiekvienas post'as turi turėti nuorodą.
// 4.2. ✅Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės:
// 4.2.1✅Albumo pavadinimą, kuris turi būti nuoroda. Kol kas nuoroda gali niekur nevesti.
// 5.   ✅Pagrindiniame puslapyje pridėti skiltį, kurioje atvaizduojamas albumų sąrašas. Kiekvienas albumas turės:
// 5.1. ✅Pavadinimą, o paspaudus ant jo - nukreipiama į albumą.
// 5.2. ✅Albumo autoriaus vardą.
// 5.3. ✅Nuotrauką.

// 6.   ✅Sukurti naują puslapį album.html ir jame atvaizduoti:
// 6.1. ✅Albumo pavadinimą.
// 6.2. ✅Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
// 6.3. ✅Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
// 6.3.2. ✅https://nanogallery2.nanostudio.org/
// 7. ✅Sukurti naują puslapį post.html ir jame atvaizduoti:
// 7.1. ✅Įrašo (post) pavadinimą.
// 7.2. ✅Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
// 7.3. ✅Įrašo turinį.
// 7.4. ✅Įrašo komentarus. Komentarai turi būti atvaizduojami tokiu pačiu principu kaip ir pagrindiniame puslapyje.
// 7.5. ✅Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į naują puslapį. Jame bus atvaizduojami visi šio vartotojo įrašai.
// 8. Sukurti vartotojų puslapį (users.html), kuriame būtų atvaizduotas vartotojų sąrašas.
// 8.1. Prie vartotojo turėtu būti jo vardas ir parašytų post'ų skaičius.
// 8.2. Paspaudus ant vartotojo - nukreipiama į jo puslapį.
// 9. Tokiu pačiu principu, kaip ir vartotojų puslapį, sukurti puslapį albumams (albums.html).
// 9.1. Prie kiekvieno albumo turi būti:
// 9.1.1. Parašytas jo pavadinimas.
// 9.1.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
// 9.1.3. Albume esančių nuotraukų skaičius.
// 9.1.4. Viena nuotrauka
// 10. Sukurti navigacijos elementą, kuris nukreips į puslapius:
// 10.1. Home / pagrindinis puslapis.
// 10.2. Users / vartotojų puslapis.
// 10.3. Albums / albumų puslapis
// 11. Navigacijos elemente sukurti paieškos laukelį (formą ir text input).
// 12. Formos submit metu, nukreipti į naują puslapį (search.html).
// 13. Šiame puslapyje atvaizduoti paieškos rezultatą.
// 13.1. Jeigu nėra tinkamų rezultatų, tai parašyti, jog rezultatų pagal užklausą nerasta.
// 14. Filtruoti pagal:
// 14.1. Tikslų vartotojo username.
// 14.2. Jeigu neranda pagal username, tada pagal tikslų vartotojo pilną vardą.
// 14.3. Jeigu neranda pagal username arba pagal tikslu vartotojo pilna vardą, tada pagal tikslų vartotojo el. paštą.
// 14.4. Tikslų post'o pavadinimą.
// 14.5. Tikslų albumo pavadinimą.Papildoma:
// 15. Search puslapyje turi būti paieškos forma, kuri veikia neperkraunant puslapio.
// 16. Sukurti filtravimo galimybę iš dalies frazės, o nebūtinai pagal tikslią frazę.
// https://github.com/RomanasV/ca-api-project
// GitHub - RomanasV/ca-api-project
// Contribute to RomanasV/ca-api-project development by creating an account on GitHub.


let section = document.querySelector('section');
fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    .then(res => res.json())
    .then(posts => {
        posts.map(post => {
            let ul = document.createElement('ul');
            let div = document.createElement('div');
            let title = document.createElement('h4');
            let author = document.createElement('a');
            let mainText = document.createElement('p');
            let commentsDiv = document.createElement('div');
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => res.json())
                .then(user => {
                    author.textContent = user.name;
                    author.href = `./user.html?userId=${user.id}`
                    //    console.log(user);
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
            commentsDiv.append(span);
            title.textContent = post.title;
            mainText.textContent = post.body;
            div.classList.add('postas');
            commentsDiv.append(ul);
            div.append(title, mainText, author, commentsDiv);
            section.append(div);
        });
        fetch('https://jsonplaceholder.typicode.com/albums?_limit=10')
            .then(res => res.json())
            .then(albums => {
                albums.map(album => {
                    let div = document.createElement('div');
                    let title = document.createElement('h4');
                    let author = document.createElement('a');
                    let img = document.createElement('img');
                    let divImg = document.createElement('div');
                    let divText = document.createElement('div');
                    fetch(`https://jsonplaceholder.typicode.com/users/${album.userId}`)
                        .then(res => res.json())
                        .then(user => {
                            author.textContent = user.name;
                            author.href = `./user.html?userId=${user.id}`
                        });
                    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}&_limit=1`)
                        .then((res) => res.json())
                        .then(photos => {
                            photos.map(photo => {
                                img.src = photo.thumbnailUrl;
                                divImg.append(img);
                                divImg.classList.add('image');
                            });
                        });

                        divText.append(title, author);
                    div.append(divImg);
                    div.append(divText);
                    title.innerHTML = `<a href='./album.html?albumId=${album.id}'>${album.title}</a>`;
                    div.classList.add('album');
                    section.append(div);
                });
            });
    });


    