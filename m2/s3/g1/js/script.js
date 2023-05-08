//PRIMO ESERCIZIO

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  confronto(per) {
    if (this.age > per.age) {
      return `${this.firstName} è più vecchio di ${per.firstName}`;
    } else if (this.age < per.age) {
      return `${this.firstName} è più giovane di ${per.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età ${per.firstName}`;
    }
  }
}
let persona1 = new User("Mario", "Rossi", 33, "Roma");
let persona2 = new User("Giovanni", "Coppla", 21, "Milano");

console.log(persona1.confronto(persona2));
console.log(persona2.confronto(persona1));

//SECONDO ESERCIZIO
let petList = [];

let petName = document.querySelector("#pet-name");
let ownerName = document.querySelector("#owner-name");
let species = document.querySelector("#species");
let breed = document.querySelector("#breed");

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  stessoPadrone = function (p) {
    if (this.ownerName === p.ownerName) {
      return true;
    } else {
      return false;
    }
  };
}

let petForm = document.querySelector("#pet-form");
let lista = document.querySelector("#pet-list");

document.querySelector("#button-owner").addEventListener("click", () => {
  let lastPet = petList[petList.length - 1];
  let oneToLastPet = petList[petList.length - 2];
  alert(lastPet.stessoPadrone(oneToLastPet));
});

let petHtml = function () {
  petList.forEach((pet) => {
    let newLi = document.createElement("li");
    newLi.innerText = `Il pet si chiama ${pet.petName}, è un ${pet.species} ${pet.breed} ed il proprietario è ${pet.ownerName}`;
    lista.appendChild(newLi);
  });
};

const svuotaList = function () {
  lista.innerText = "";
};

petForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  );

  petList.push(newPet);
  console.log(petList);
  svuotaList();
  petHtml();

  petForm.reset();
});
