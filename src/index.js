/* eslint-disable no-undef */
window.onload = function () {
  let title = document.querySelector('#category-title');
  let home = document.querySelector('.home');
  let main_box = document.querySelector('#main-box');
  let products_box = document.querySelector('#products-box');

  home.onclick = function () {
    products_box.style.display = 'none';
    main_box.style.display = 'block';
  };
  let women = document.querySelector('.women');
  women.onclick = function () {
    products_box.style.display = 'block';
    main_box.style.display = 'none';
    title.innerHTML = "Women's Clothing";
    ui.productsToTable(productsData, 'women');
  };
  let men = document.querySelector('.men');
  men.onclick = function () {
    products_box.style.display = 'block';
    main_box.style.display = 'none';
    title.innerHTML = "Men's Clothing";
    ui.productsToTable(productsData, 'men');
  };
  let accessories = document.querySelector('.accessories');
  accessories.onclick = function () {
    products_box.style.display = 'block';
    main_box.style.display = 'none';
    title.innerHTML = 'Accessories';
    ui.productsToTable(productsData, 'accessories');
  };
};
