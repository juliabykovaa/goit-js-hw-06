const counterValue = document.querySelector("#value");
const decButton = document.querySelector('button[data-action="decrement"]')
const incButton = document.querySelector('button[data-action="increment"]')


decButton.addEventListener('click', () => {
    counterValue.textContent -= 1;
})

incButton.addEventListener('click', () => {
    let newValue = parseInt(counterValue.textContent)
    counterValue.textContent = newValue + 1;
})