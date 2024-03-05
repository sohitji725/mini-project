const addBtn = document.querySelector(".addbtn");  // Corrected class name
const main = document.querySelector("#main");


main.addEventListener("click", function (event) {
    const target = event.target;
    
    if (target.classList.contains("trash")) {
        const note = target.closest(".note");
        if (note) {
            note.remove();
            saveNotes();
        }
    } else if (target.classList.contains("save")) {
        saveNotes();
    }
});

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map((note) => note.value);

    if (data.length === 0) {
        localStorage.removeItem("notes");
    } else {
        localStorage.setItem("notes", JSON.stringify(data));
    }
};

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = `
    <div class="tool">
         <i class="save fas fa-save"></i>
         <i class="trash fas fa-trash"></i> 
    </div>
    <textarea>${text}</textarea>
    `;

    main.appendChild(note);
    saveNotes();
};
addBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the click event
    addNote();
});


(function () {
    const lsNotes = JSON.parse(localStorage.getItem("notes"));
    if (lsNotes === null) {
        addNote();
    } else {
        lsNotes.forEach(addNote);
    }
})();
