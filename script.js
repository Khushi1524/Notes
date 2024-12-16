const addnote = document.querySelector('#newnote');
const noteContainer = document.querySelector('#noteContainer');

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem("notes")
}

// showNotes();

function updateStorage(){
    // console.log("updated");
    localStorage.setItem("notes",noteContainer.innerHTML)
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
    updateStorage()

    newCard.querySelector("#delete").addEventListener("click", () => {
        newCard.remove();
        updateStorage()
    });

    newCard.querySelector('textarea').addEventListener("input",()=>{
        updateStorage();
    })
});


// const mode = document.querySelector('#mode')
// const body = document.querySelector('body')
// mode.addEventListener('click',(event)=>{
//     body.style.backgroundColor = "black";
// })