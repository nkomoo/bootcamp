const apiUrl = `https://imdb-api.com/en/API/Top250Movies/k_l1bfsd50`;

fetch(apiUrl).then((res) => {
  const resPromise = res.json();
  resPromise.then((data) => {
    if (!localStorage.getItem("movieDataStored")) {
      funcLocalData(data.items);
      console.log(data.items)
    }
    createCards();
  });
});

function funcLocalData(data) {
  let moviesData = [];

  data.map((m) => {
    moviesData.push({
      id: m.id,
      title: m.title,
      year: m.year,
      image: m.image,
      rating: m.imDbRating,
      comments: "",
    });
  });

  localStorage.setItem("movieDataStored", JSON.stringify(moviesData));
}

function createCards() {
  let tempMovieData = JSON.parse(localStorage.getItem("movieDataStored"));
  let tempCardData = "";

  tempMovieData.map((iMd) => {
    tempCardData += `
  <div class="movieCard">
      <img scr="" alt="" />
      <div class="movieCardDetails">
        <h2>${iMd.title}</h2>
        <p>${iMd.year}</p>
        <p>${iMd.rating}</p>

        <div>
          <a> <i class="fas fa-heart"></i> </a>
          <a href="https://imdb-api.com/title/k_l1bfsd50/${iMd.id}" target="_blank">
            <i class="fas fa-share-alt"></i>
          </a>
          <a onClick="addComment('${iMd.id}')"> <i class="fas fa-comment"></i> </a>
        </div>
      </div>
    </div>`;
  });

  document.querySelector("body").innerHTML = tempCardData;
}

function addComment(id) {
  let tempMovieData = JSON.parse(localStorage.getItem("movieDataStored"));
  let comment = prompt('Please submit a comment');


  tempMovieData = tempMovieData.map((data) => {
    if(data.id === id) {
      data.comments = comment;
    }
    return data;
  })

  localStorage.setItem("movieDataStored", JSON.stringify(tempMovieData));

}
