// let inputField= document.querySelector('input');
// let movie = document.createElement("Movie Titles);
// let addBtn = document.querySelector("#add");
// let cancelbtn = document.querySelector()

// console.log(inputField.textContent);

// inputField.textContent = "Movie Title"

let addMovie= (event) => {
    let inputField= document.querySelector('input'); 
    event.preventDefault(); 
    
    let movie = document.createElement("li")
    
    let movieTitle= document.createElement("span");
       movieTitle.textContent=
       inputField.value

       movie.appendChild(movieTitle);

       let list = document.querySelector("ul");

        list.appendChild(movie);
        
        inputField.value = ''




};
    let form = document.querySelector("form")
    
    form.addEventListener("submit", addMovie);

//addMovie();