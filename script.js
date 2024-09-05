const input = document.getElementById("inp");
const ul = document.getElementById("ul");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // console.log(input.value);

    const li = document.createElement("li");
    ul.appendChild(li);
    li.className = "li"
    li.innerHTML = input.value

    form.reset()
})