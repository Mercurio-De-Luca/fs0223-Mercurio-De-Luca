let name = document.getElementById("name");
let saveButton = document.getElementById("save-ls");
let removeButton = document.getElementById("remove-ls");
let valueSave = document.getElementById("value-save");
let form = document.getElementById("form");
let stopwatch = document.getElementById("timer");
let second = sessionStorage.getItem("time");

const timer = function () {
  sessionStorage.setItem("time", second);
  second++;
  stopwatch.textContent = second;
};
setInterval(timer, 1000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let createList = function () {
  let li = document.createElement("li");
  li.innerText = `${name.value}`;
  valueSave.appendChild(li);
};

saveButton.addEventListener("click", (e) => {
  let inputField = name.value;
  localStorage.setItem("name", inputField);
  createList();
});
removeButton.addEventListener("click", (e) => {
  let inputField = name.value;
  localStorage.removeItem("name");
  name.value = "";
});
