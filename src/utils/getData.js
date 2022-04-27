export const getData = async (id) => {
  const API = "https://rickandmortyapi.com/api/character/";
  const apiURL = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export const getMoreCharacters = async (page) => {
  const API = `https://rickandmortyapi.com/api/character?page=${page}`;
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};
