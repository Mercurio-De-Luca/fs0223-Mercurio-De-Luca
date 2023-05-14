let barContent = new URLSearchParams(window.location.search);
let productId = barContent.get("productId");

const formReset = () => {
  let btn = document.getElementById("reset-button");
  btn.addEventListener("click", () => {
    productForm.reset();
  });
};
formReset();
if (productId) {
  document.getElementById("save-button").innerText = "MODIFICA PRODOTTO";
  let deleteButton = document.getElementById("delete-button");
  deleteButton.classList.remove("d-none");
  deleteButton.addEventListener("click", () => {
    fetch("https://striveschool-api.herokuapp.com/api/product/" + productId, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNGExMTg4Zjc0MDAwMTQyODc5MDMiLCJpYXQiOjE2ODM5MDA5NDUsImV4cCI6MTY4NTExMDU0NX0.STNTzEZW9KZN_ebXDeyApjH9TJXy_MQ7R9_afyyI_P4",
      },
    })
      .then((res) => {
        if (res.ok) {
          alert("Prodotto eliminato");
          location.assign("homepage.html");
        } else {
          throw new Error("C'è qualche problema nell'eliminazone");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
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
        throw new Error("Errore nel trovare il prodotto");
      }
    })
    .then((prod) => {
      document.getElementById("name").value = prod.name;
      document.getElementById("description").value = prod.description;
      document.getElementById("price").value = prod.price;
      document.getElementById("brand").value = prod.brand;
      document.getElementById("img").value = prod.imageUrl;
    })
    .catch((err) => {
      console.log(err);
    });
}

const productForm = document.getElementById("product-form");
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name");
  let description = document.getElementById("description");
  let price = document.getElementById("price");
  let brand = document.getElementById("brand");
  let imageUrl = document.getElementById("img");

  let newProduct = {
    name: name.value,
    description: description.value,
    price: price.value,
    brand: brand.value,
    imageUrl: imageUrl.value,
  };

  console.log(newProduct);

  fetch(
    productId
      ? "https://striveschool-api.herokuapp.com/api/product/" + productId
      : "https://striveschool-api.herokuapp.com/api/product/",
    {
      method: productId ? "PUT" : "POST",
      body: JSON.stringify(newProduct),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlNGExMTg4Zjc0MDAwMTQyODc5MDMiLCJpYXQiOjE2ODM5MDA5NDUsImV4cCI6MTY4NTExMDU0NX0.STNTzEZW9KZN_ebXDeyApjH9TJXy_MQ7R9_afyyI_P4",
        "Content-Type": "application/json",
      },
    }
  )
    .then((res) => {
      if (res.ok) {
        alert(productId ? "Prodotto modificato" : "Prodotto aggiunto");
        location.assign("homepage.html");
      } else {
        throw new Error("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
