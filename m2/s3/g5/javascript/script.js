const creatCol = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNGExMTg4Zjc0MDAwMTQyODc5MDMiLCJpYXQiOjE2ODM5MDA5NDUsImV4cCI6MTY4NTExMDU0NX0.STNTzEZW9KZN_ebXDeyApjH9TJXy_MQ7R9_afyyI_P4",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error");
      }
    })
    .then((data) => {
      console.log(data);
      data.forEach((event) => {
        let colTemplate = `
        <div class="col-12 mt-2 col-md-4 col-lg-3  p-lg-4 animation-col">
                <div class="card h-100 shadow-card">
                <img src="${event.imageUrl}" alt="img" class="h-75"
                >
                  <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">
                      ${event.description}
                    </p>
                    <p>${event.brand} | ${event.price}€</p>
                    <div class="row">
                    <div class="col-6">
                   <a href="./back-office.html?productId=${event._id}" class="btn btn-primary">MODIFICA</a>
                   </div>
                   <div class="col-6">
                    <a href="dettaglio.html?productId=${event._id}">Scopri di più</a>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              `;
        let row = document.getElementById("card-row");
        row.innerHTML += colTemplate;
      });
    })
    .catch((err) => {
      console.log(err, "error");
    });
};

window.onload = () => {
  creatCol();
};
