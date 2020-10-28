let searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  console.log("button clicked");
  sendApiRequest();
});

async function sendApiRequest() {
  let APP_ID = "b474311d";
  let API_KEY = "4e076f97315ec6a0485ace911e6c22ff";
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=pizza`);
  console.log(response);
}

function useApiData(data) {}
