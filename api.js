// use keyboard enter for search :
const searchField = document.getElementById('button');
const searchInput = document.getElementById('search-input');
searchInput.addEventListener("keypress", function (event) {
    console.log('keypress trigerred', event.key)
    if (event.key === 'Enter'){
        searchField.click();
    }      
});

const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser();

const displaySingleUser = user => {
    console.log(user)
}

// meal dB 
const toggleSpinner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle
}
const toggleSearchResults = displayStyle => {
    document.getElementById('meals').style.display = displayStyle
}
const searchMeal = () => {
    const searchText = document.getElementById('search-input').value;

    // fn calling
    toggleSpinner('block');
    toggleSearchResults('none')
    loadMeals(searchText);
    document.getElementById('search-input').value = ''
}

const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadMeals('fish')

const displayMeals = meals => {
    const container = document.getElementById('meals');
    container.textContent = '';
    if(!meals) {

    }
    meals?.forEach(meal => {
        console.log(meal)
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${meal.strMeal}</h1>
        <p>${meal.strIngredient18 ? meal.strIngredient18: 'not available'}</p>
        <button onclick="loadMealDetails('${meal.strMeal}')">click me</button>`;
        container.appendChild(div)    
    });
    toggleSpinner('none')
    toggleSearchResults('block')
}

const loadMealDetails = mealName => {
    console.log(mealName)
}