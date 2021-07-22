function menu() {
    const element = document.querySelector('div#content');
    const dish_one = document.createElement('div');
    dish_one.classList.add('dish-one');
    const img_one = document.createElement('img');
    const h1_one = document.createElement('h1');
    const price_one = document.createElement('p');
    const p_one = document.createElement('p');

    img_one.setAttribute('src', "../src/vegetarian-teriyaki-stir-fry-with-noodles-recipe-1.jpeg");
    h1_one.textContent = "Vegan Teriyaki";
    price_one.textContent = "5€";
    p_one.textContent = "A very delicious noodle dish";
 
  
    element.appendChild(dish_one);
    dish_one.appendChild(img_one);
    dish_one.appendChild(h1_one);
    dish_one.appendChild(price_one);
    dish_one.appendChild(p_one);
    
  }

  export default menu;