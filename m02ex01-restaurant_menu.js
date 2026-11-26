const breakfastMenu = ['Pancakes', 'Eggs', 'Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// Metodos diferentes de iterar com arrays

// Iterar com '.map'
const breakfastMenuItems = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItems;

// Iterar com '.forEach'
let mainCourseItems = '';
mainCourseMenu.forEach((item, index) => {mainCourseItems += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItems;

// Iterar com 'for'
let dessertItems = '';
for (i = 0; i < dessertMenu.length; i++) {
    dessertItems += `<p>Item ${i +1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;