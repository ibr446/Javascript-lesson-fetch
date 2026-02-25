let path = new URLSearchParams(window.location.search)
let elParent = document.querySelector(".section__film");
let filmID = path.get("id")


function getMovies(id) {
    fetch(`http://www.omdbapi.com/?&apikey=eb158e67&i=${id}`)
        .then((res) => res.json())
        .then((data) => renderFilms(data))
}



function renderFilms({Poster, Title, Genre, Plot}) {
    elParent.innerHTML = `
        <div class="flex">
            <div class="box">
                <img src="${Poster}" alt="">
            </div>
            <div class=""box2>
                <p class="title">${Title}</p>
                <button class="Genre">${Genre}</button>
                <p class="des">${Plot}</p>
                <button class="button">Watch Now</button>
                <button class="button2">Download</button>
            </div>
        </div>    
    `;
};



getMovies(filmID)