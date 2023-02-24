const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



ingredients.forEach(ingredient => {
  const newEl = document.createElement('li');
  newEl.textContent = ingredient;
  newEl.classList.add('item')
  const list = document.querySelector('#ingredients');
  list.append(newEl)
});


