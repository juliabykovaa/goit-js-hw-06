const categoriesList = categories.querySelectorAll('ul');
console.log(`Number of categories: ${categoriesList.length}`);
 
const categoryNames = categories.querySelectorAll('h2')
categoryNames.forEach(name => {
    const liEl = name.nextElementSibling.children;
    console.log(`Category: ${name.textContent}`)
    console.log('Elements:', liEl.length)
    
})
