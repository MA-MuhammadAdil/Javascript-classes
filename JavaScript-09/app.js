//IIFE (Immediately invoked function Expressions)
// (async function () {
//     const response = await fetch("./recipes.json");
//     const recipes = await response.json();

//     const inputElem = document.getElementById("searchInput");
//     const btnElem = document.getElementById("searchBtn");
//     const listElem = document.getElementById("recipe-list");
//     const detailsElem = document.getElementById("recipeDetailsContainer");

//     function loadRecipeDetails (recipe) {
//         console.log(recipe);
//         detailsElem.innerHTML = `
//         <h2 class="title">${recipe.title}</h2>
//         <ul>${recipe.ingredients.map(function (ingredients ) {
//                 return "<li>" + ingredients + "</li>"
//             }).join("")}</ul>
//             <h3>Instruction</h3>
//             <div>${recipe.instructions}</div>
        
//         `;
//     }

//     function displaySearchResults (results) {
//         listElem.innerHTML = "";
//         results.forEach(function (recipe) {
//             const li = document.createElement("li");
//             // const ListItem = `
//             //         <div class"title">${recipe.title}</div>
//             //         <div class"description">${recipe.description}</div>
//             // `;
//             li.innerHTML = recipe.title;
//             li.addEventListener("click", function(){
//                 loadRecipeDetails(recipe);
//             });
//             listElem.appendChild(li);
//         })

//     }

//     function search () {
//         const query =  inputElem.value.toLowerCase();
//         const results =recipes.filter(function (recipe) {
//             return (recipe.title.toLowerCase().includes(query) ||
//             recipe.ingredients.join(" ").toLowerCase().includes(query));
//         });
        
//         displaySearchResults(results);
//     }
//     btnElem.addEventListener("click", search);
// })();