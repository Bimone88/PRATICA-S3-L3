const pageForm = document.getElementById("main-form"); // id del tag form

// ora interagiamo con la sua operazione di invio "submit"
pageForm.addEventListener("submit", function (e) {
  // dobbiamo fermare il comportamento di default
  // per avere la pagina in maniera moderna
  e.preventDefault(); // preventiva il default e quindi evita che la pagina si aggiorni
  // preventDefault() è la prima cosa da inserire in addEventListener

  // ora facciamo ciò che vogliamo
  // recuperare i valori del form

  // per recuperare i valori dei campi input seleziomo del form i campi input
  const nameInput = document.getElementById("first-Name"); // .value anche qua
  /*const ageInput = document.getElementById("age");
  const cityInput = document.getElementById("city");
  const bioInput = document.getElementById("bio");*/

  console.log(nameInput.value); // il value è una proprietà
  /* console.log(ageInput.value);
  console.log(cityInput.value);
  console.log(bioInput.value);*/

  alert("COMPLIMENTI! PERSONAGGIO SCELTO!");

  // creare un elemento della pagina con i dati creati
  // creiamo un div vuoto
  const userCard = document.createElement("div");
  // <div></div>
  userCard.innerHTML = `
    <p>${nameInput.value}</p>  
    
    `; // ${} valori per variabili nel form
  // div con tutti questi elementi qua sopra
  const RubricaSection = document.getElementById("Rubrica");
  RubricaSection.appendChild(userCard);

  nameInput.value = " ";
  /*ageInput.value = "";
  cityInput.value = " "; // svuoto il campo
  bioInput.value = " ";*/
  /*const cancel = document.querySelectorAll("p")[0];
  cancel.classList.add("completed");*/
  document.getElementById("Rubrica").addEventListener("click", function (e) {
    if (e.target.tagName === "P") {
      e.target.classList.toggle("perfect");
    }
  });
});
