const inputEl = document.getElementById("input-el");
const inputButtonEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteButtonEl = document.getElementById("delete-btn");
const saveButtonEl = document.getElementById("tab-btn");
let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

function render(Leads) {
  let listItems = "";
  for (let i = 0; i < Leads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${Leads[i]}'>
            ${Leads[i]}
        </a>
    </li>
`;
  }
  ulEl.innerHTML = listItems;
}

saveButtonEl.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

inputButtonEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  render(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
});

deleteButtonEl.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});
