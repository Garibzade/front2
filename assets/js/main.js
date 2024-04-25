fetch('https://api.tvmaze.com/shows')
.then(res=>res.json())
.then(a=>{getFilms(a);
})




var film=document.getElementById("films-psy");
function getFilms(films){
    film.innerHTML="";



    films.forEach(char=>{
        film.innerHTML+=
    
       `<div class="col-md-2">
        <img src="${char.image.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${char.name}</h5>
          <p class="card-text">${char.imdb}</p>
          <p class="card-text">${char.network.name}</p>

          <p class="card-text">${char.language}</p>

          <a href="#" class="btn btn-primary">Etrafli melumat</a>
        </div>
      </div>`;
    })
}