let barContent = new URLSearchParams(window.location.search);
let productId = barContent.get("productId");

const card = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
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
    .then((product) => {
      console.log(product);
      let temp = `
            <div class="col d-flex justify-content-center">
            <div class="card mb-3" style="width: 740px;">
            <div class="row g-0">
            <div class="col-4">
            <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-8">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><small class="text-body-secondary">${product.brand} | ${product.price} €</small></p>
            </div>
            </div>
            </div>
            </div>
            </div>
            `;
      let row = document.getElementById("card");
      row.innerHTML += temp;
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  card();
};
