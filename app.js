function renderAge() {
  const date = new Date();
  const year = date.getFullYear();
  const years = year - 1998;

  const yearsElement = document.getElementById("years");
  yearsElement.innerText = `${years - 1} Years old`;
}

renderAge();
