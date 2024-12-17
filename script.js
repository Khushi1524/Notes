const addnote = document.querySelector("#newnote");
const noteContainer = document.querySelector("#noteContainer");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}

// showNotes();

function updateStorage() {
  // console.log("updated");
  localStorage.setItem("notes", noteContainer.innerHTML);
}

addnote.addEventListener("click", (event) => {
  const newCard = document.createElement("div");
  newCard.classList.add("card");

  newCard.innerHTML = `
        <textarea name="" id=""></textarea>
        <i id="delete" class="fa-solid fa-trash"></i>
        <i id="edit" class="fa-solid fa-pen-to-square"></i>
    `;

  noteContainer.appendChild(newCard);
  updateStorage();

  newCard.querySelector("#delete").addEventListener("click", () => {
    newCard.remove();
    updateStorage();
  });

  newCard.querySelector("textarea").addEventListener("input", () => {
    updateStorage();
  });
});

const mode = document.querySelector('#mode')
const body = document.querySelector('body')
const moon = document.querySelector('#moon')
mode.addEventListener('click',(event)=>{
   document.body.classList.toggle("dark-theme");
  if(body.classList.contains("dark-theme")){
    mode.innerHTML = '<i class="fa-solid fa-sun"></i><h4>Light Mode<h4/>'
  }else{
    mode.innerHTML = '<i class="fa fa-moon"></i><h4>Dark Mode<h4/>'
  }
})

//signup

const signUp = document.querySelector("#signup");
const signupContainer = document.querySelector(".signupContainer");
const formClose = document.querySelector("#formClose");

signUp.addEventListener("click", (e) => {
  signupContainer.style.display = "flex";
});

formClose.addEventListener("click", (e) => {
  signupContainer.style.display = "none";
});

// const login = document.querySelector("#login");
// const inputName = document.querySelector("#inputName");
// const formHeading = document.querySelector("#formHeading");
// const submit = document.querySelector("#submit");
// const textBelow = document.querySelector("#textBelow");
// login.addEventListener("click", (e) => {
//   e.preventDefault();
//   inputName.style.display = "none";
//   formHeading.innerHTML = "Login";
//   submit.innerHTML = "Login";
//   textBelow.style.display = 'none'
// });
