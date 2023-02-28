var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");

addToDoButton.onclick = function () {
  //verifier si l'inputn'est pas vide
  if (inputField.value != "") {
    //si l'input n'est pas vide, on crée un paragraphe
    var paragraph = document.createElement("p");
  }
  //Valoriser ce paragraphe avec la contenu de l'input
  paragraph.innerText = inputField.value;

  //styliser le paragraphe
  paragraph.classList.add("paragraph_style");

  //insérer le paragraphe dans le toDoContainer
  toDoContainer.appendChild(paragraph);

  //vider l'input quand le paragraphe est inséré
  inputField.value = "";

  //barré le paragraphe quand on clique dessus
  paragraph.addEventlistener("click", function () {
    paragraph.classList.add("paragraphe_click");
  })

  //supprimer le tâche quand on double clique dessus
  paragraph.addEventlistener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  })
}
