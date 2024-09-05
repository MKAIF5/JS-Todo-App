const input = document.getElementById("inp");
const ul = document.getElementById("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (input.value === "") {
        Swal.fire({
            title: 'Oops',
            text: 'Please Add Your Text',
            icon: 'error',
        });
    } else {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.className = "li";

        const editSpan = document.createElement("span");
        editSpan.className = "icon edit";
        editSpan.innerHTML = "&#9998;";
        li.appendChild(editSpan);

        const deleteSpan = document.createElement("span");
        deleteSpan.className = "icon delete";
        deleteSpan.innerHTML = "&#10005;";
        li.appendChild(deleteSpan);

        const textSpan = document.createElement("span");
        textSpan.className = "text";
        textSpan.innerText = input.value;
        li.appendChild(textSpan);

        deleteSpan.addEventListener("click", () => {
            li.remove();
        });

        editSpan.addEventListener("click", () => {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = textSpan.innerText;
            textSpan.replaceWith(editInput);
            editInput.focus();

            editInput.addEventListener("blur", () => {
                if (editInput.value.trim() !== "") {
                    textSpan.innerText = editInput.value;
                }
                editInput.replaceWith(textSpan);
            });

            editInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    editInput.blur();
                }
            });
        });
    }
    form.reset();
});
