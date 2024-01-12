const inputEl = document.getElementById("input-el");
const inputButtonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

inputButtonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
            ${myLeads[i]}
        </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
