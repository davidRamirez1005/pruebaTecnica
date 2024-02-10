import React from "react";
import style from "../../../assets/css/advertisement.module.css";
import libro2 from "../../../assets/img/dia-mundial-del-libro.png";


export default function Advertisement() {
  return (
    <div>
      <div className={style.contenedor}>
        <div className={style.presentation}>
          <div className="grid grid-cols-6 gap-2">
            <div className="col-span-4">
              <h1 className={style.titulo}>
                Hola, Andrés! Tienes ideas sobre un nuevo libro?
              </h1>
              <br />
              <p className={style.items}>1. lee los comentarios de tus lectores</p>
              <p className={style.items}>2. elige el genero que quieres para tu publico</p>
              <p className={style.items}>3. Busca siempre a un editor de confianza</p>
              <br />
            </div>
            <div className={`${style.img} col-span-2`}>
              <img src={libro2} alt="libro" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
