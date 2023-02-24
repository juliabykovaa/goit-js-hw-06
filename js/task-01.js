const categoriesList = categories.querySelectorAll('ul');

const categoryNames = categories.querySelectorAll('h2')
categoryNames.forEach(name => {
    const liEl = name.nextElementSibling.children;
    console.log(`Number of categories: ${categoriesList.length}`,
        `Category: ${name.textContent}`,
        'Elements:', liEl.length)
    
})
