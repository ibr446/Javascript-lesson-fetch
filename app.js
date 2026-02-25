
let elForm = document.querySelector(".form")
let elInput = document.querySelector(".input")
let elList = document.querySelector(".movies__list");
let elSelect = document.querySelector(".select")


let movies = []


elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(elInput.value)

    fetch(`http://www.omdbapi.com/?&apikey=eb158e67&s=${elInput.value}`)
        .then((res) => res.json())
        .then((data) => {
            movies = data.Search
            renderData(movies, elList)
            console.log(data)
        }) 
        .catch((err) => {
            console.log(err);
            elList.innerHTML = "Bunda film topilmadi"
        })
})





function renderData(arr, parent) {
    parent.innerHTML = "";

    arr.forEach(({Poster, Title, imdbID, Year, Type}) => {
        parent.innerHTML += `
            <li class="item">
                <a href="detail.html?id=${imdbID}">
                    <img class="img" src="${Poster}" alt="">
                </a>
                <h3 class="films__title">${Title}</h3>
                <p class="films__genre">Genre:${Type}</p>
                <p class="films__released">Released year:${Year}</p>
            </li>
        `;
    });

};




elSelect.addEventListener("input", () => {
    if(elSelect.value === "a-z") {
        movies.sort((a, b) => a.Title.localeCompare(b.Title))
        i = 0
        renderData(movies, elList)
    }

    if(elSelect.value === "z-a") {
        movies.sort((a, b) => b.Title.localeCompare(a.Title))
        i = 0
        renderData(movies, elList)
    }

    if(elSelect.value === "inc") {
        movies.sort((a, b) => a.Year - b.Year)
        i = 0
        renderData(movies, elList)
    }

    if(elSelect.value === "dec") {
        movies.sort((a, b) => b.Year - a.Year)
        i = 0
        renderData(movies, elList)
    }
})


renderData(movies, elList)
























