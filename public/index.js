let searchBtn = document.getElementById("button");

searchBtn.addEventListener("click", () => {
  console.log("button clicked");
  sendApiRequest();
});

async function sendApiRequest() {
  let APP_ID = "b474311d";
  let API_KEY = "4e076f97315ec6a0485ace911e6c22ff";
  let searchTerm = document.getElementById("search").value
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=${searchTerm}`);
  console.log(searchTerm);
  console.log(response);
  let data = await response.json()
  console.log(data)
  useApiData(data)
}

function useApiData(data) {
  let contentDiv = document.getElementById('content')
  
  for(let i = 0; i <= 10; i++ ) {
   
  let content = document.createElement("div")
    content.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="${data.hits[i].recipe.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.hits[i].recipe.label}</h5>
      <p class="card-text">${data.hits[i].recipe.healthLabels}</p>
      <ul>
      <li> Serves: ${data.hits[i].recipe.yield}
      </li>
      <li>Nutrients:${hits[i].recipe.totalNutrients}</li>
      </ul>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    
    `
 
  contentDiv.appendChild(content)
  }
}
