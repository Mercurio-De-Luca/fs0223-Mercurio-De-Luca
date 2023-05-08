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
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const petForm = document.querySelector("#pet-form");
const petList = document.querySelector("#pet-list");

petForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const petName = formData.get("petName");
  const ownerName = formData.get("ownerName");
  const species = formData.get("species");
  const breed = formData.get("breed");

  const newPet = new Pet(petName, ownerName, species, breed);

  const li = document.createElement("li");
  li.textContent = `${newPet.petName} ${newPet.species}  ${newPet.breed}  Proprietario: ${newPet.ownerName}`;
  petList.appendChild(li);

  petForm.reset();
});
