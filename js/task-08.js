const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();
    
    const { elements: { email, password } }
        = event.currentTarget;
    console.log(email.value, password.value);
    
    if (email.value === "" || password.value === "") {
        alert("Заповніть, будь ласка, всі поля");
    }
    
    event.currentTarget.reset();
};


