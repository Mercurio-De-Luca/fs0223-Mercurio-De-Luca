function loadImage() {
  const image = document.getElementById("title");

  fetch("https://api.pexels.com/v1/search?query=sports", {
    headers: {
      Authorization: "iMOD3nxoXDrkmxMswwHjYSvOX31oH93QbZ9duCZCrnXqyOydj8LTuz1v",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error");
      }
    })
    .then((foto) => {
      console.log(foto);
      foto.forEach((e) => {
        let img = document.createElement("img");
        img.src = foto.src;
        image
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
const loadButton = document.getElementById("load-images");
loadButton.addEventListener("click", loadImage);
