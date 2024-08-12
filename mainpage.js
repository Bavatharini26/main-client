document.addEventListener('DOMContentLoaded', function() {
    const recipeResults = document.getElementById('recipe-results');
    const queryInput = document.getElementById('query');
    const searchButton = document.getElementById('search-button');
    let recipes = [];

    function displayRecipes(recipesToDisplay) {
        recipeResults.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            
            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeImage.alt = recipe.name;
            recipeImage.addEventListener('click', () => {
                localStorage.setItem('selectedRecipeId', recipe.id);
                window.location.href = 'recipe.html'; // Redirect to the detail page
            });
            recipeCard.appendChild(recipeImage);
            
            const recipeContent = document.createElement('div');
            recipeContent.className = 'recipe-card-content';
            
            const recipeTitle = document.createElement('h2');
            recipeTitle.textContent = recipe.name;
            recipeContent.appendChild(recipeTitle);
            
            const recipeIngredients = document.createElement('p');
            recipeIngredients.innerHTML = '<strong>Ingredients:</strong>';
            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsList.appendChild(ingredientItem);
            });
            recipeIngredients.appendChild(ingredientsList);
            recipeContent.appendChild(recipeIngredients);
            
            recipeCard.appendChild(recipeContent);
            recipeResults.appendChild(recipeCard);
        });
    }

    function fetchRecipes() {
        fetch(`https://dummyjson.com/recipes`)
            .then(response => response.json())
            .then(data => {
                recipes = data.recipes;
                displayRecipes(recipes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                recipeResults.innerHTML = '<p>Error fetching data</p>';
            });
    }

    function filterRecipes() {
        const query = queryInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query)
        );
        displayRecipes(filteredRecipes);
    }

    fetchRecipes(); // Fetch and display recipes on page load

    searchButton.addEventListener('click', filterRecipes);
    queryInput.addEventListener('input', filterRecipes); // Filter on input
});