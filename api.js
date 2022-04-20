const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser();

const displaySingleUser = user => {
    console.log(user)
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
    meals.forEach(meal => {
        console.log(meal)
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>${meal.strArea}</h1>
        <button onclick="loadMealDetails('${meal.strMeal}')">click me</button>`;
        container.appendChild(div)    
    })
}

const loadMealDetails = mealName => {
    console.log(mealName)
}