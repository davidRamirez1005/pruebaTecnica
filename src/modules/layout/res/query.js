// query.js
import axios from "axios";

export const fetchRandomCharacter = async (apiUrl = "https://rickandmortyapi.com/api/character/") => {
  try {
    const randomCharacterId = Math.floor(Math.random() * 100) + 1;
    const response = await axios.get(`${apiUrl}${randomCharacterId}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
