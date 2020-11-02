let searchBtn = document.getElementById("button");

searchBtn.addEventListener("click", () => {
  console.log("button clicked");
  sendApiRequest();
});

async function sendApiRequest() {
  let APP_ID = "b474311d";
  let API_KEY = "4e076f97315ec6a0485ace911e6c22ff";
  let searchTerm = document.getElementById("search").value;
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchTerm}`);
  console.log(searchTerm);
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

function useApiData(data) {
  let contentDiv = document.getElementById("content");

  for (let i = 0; i <= 15; i++) {
    let content = document.createElement("div");
    content.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h1 class="card-title">${data.hits[i].recipe.label}</h1>
      <h3 class="card-text">Health Label: ${data.hits[i].recipe.healthLabels}</h3>
      <ul>
      <li> <h5>
      Serves: ${data.hits[i].recipe.yield}
      </h5>
      </li>
      <li>
      <h5>
      Calories: ${data.hits[i].recipe.calories.toFixed()}
      </h5>
      </li>
      </ul>
      <a href="${data.hits[i].recipe.url}" class="btn btn-primary">Full Recipe</a>
    </div> 
  </div>
    
    `;
    content.setAttribute("class", "recipeDiv");
    contentDiv.appendChild(content);
  }
}
