const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", () => {
    inputEl.classList.toggle("valid", inputEl.value.length === 6 );
    inputEl.classList.toggle("invalid", inputEl.value.length !== 6 )
})