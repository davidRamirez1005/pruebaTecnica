import React, { useEffect, useState } from "react";
import { fetchRandomCharacter } from "../res/query";
import style from "../../../assets/css/authores.module.css";

export default function Authors() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterData = async () => {
      const data = await fetchRandomCharacter();
      setCharacter(data);
    };

    fetchCharacterData();
  }, []);

  return (
    <div className={`${style.authores}`}>
      <div className="flex items-center mt-2 justify-between">
        <div className={`${style.person} mr-5 p-2`}>
          {character && (
            <img
              className="w-16 h-16"
              src={character.image}
              alt={character.name}
            />
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xl text-black font-bold">
              {character ? character.name : "Cargando..."}
            </p>
          </div>
          <div className="text-gray-500">
            {character ? character.species : "Cargando..."}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-gray-500">
            <p>Lectores</p>
          </div>
          <div className="ml-2">
            <p className="text-xl font-bold text-black">143K</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
