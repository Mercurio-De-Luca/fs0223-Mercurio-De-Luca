const removeCard = function () {
  let card = document.getElementsById("card");
};

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore");
    }
  })
  .then((book) => {
    console.log(book);
    let row = document.getElementById("row");
    book.forEach((book) => {
      let col = document.createElement("div");
      col.classList.add("col", "col-lg-4");
      col.innerHTML = `
        <div class="card" id="card" style="width: 18rem;">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <p class="card-text">${book.price} €</p>
        <a href="#" class="btn btn-primary" onclick="" >Scarta</a>
        </div>
        </div>`;
      row.appendChild(col);
    });
  })
  .catch((err) => {
    console.log(err);
  });
