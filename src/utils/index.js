// add your own api key and id
const EDAMAM_API_KEY = "ebcbab5e4abf47abe7471bb4d51a6f34";
const EDAMAM_APP_ID = "f06d1b53";

export async function fetchRecipes(filter) {
  const { query, limit } = filter;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}&from=0&to=${limit}&`;
  const response = await fetch(url)
  const data = await response.json();
  console.log(data);

  return data?.hits;
}

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}`;

  const response = await fetch(url);

  const data = await response.json();

  return data[0];
}
