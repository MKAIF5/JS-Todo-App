const input = document.getElementById("inp");
const ul = document.getElementById("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(input.value);

    if (input.value === "") {
        Swal.fire({
            title: 'Oops',
            text: 'Please Add Your Text',
            icon: 'error',
        })
    }
    else {
        const li = document.createElement("li");
        ul.appendChild(li);
        li.className = "li"
        li.innerHTML = input.value
        const span = document.createElement("span");
        span.className = "span"
        span.innerHTML = "\u00d7"
        li.appendChild(span)



    }
    form.reset()
})