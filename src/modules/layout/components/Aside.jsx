import React from "react";
import style from "../../../assets/css/aside.module.css";
import libro from '../../../assets/img/libro.png'

export default function Aside() {
  return (
    <div>
      <div className={`${style.icon} grid grid-cols-1`}>
        <div className={style.aside}>
          <div>
            <img src={libro} alt=""/>
          </div>
        </div>
      </div>
      <div className={`${style.icon} grid grid-cols-1`}>
        <div className={style.item}>Inicio</div>
        <div className={style.item}>Libros</div>
        <div className={style.item}>Editores</div>
        <div className={style.item}>Lectores</div>
      </div>
      <div className={`${style.icon} grid grid-cols-1`}>
        <div className={style.button}>Crear ➕</div>
      </div>
    </div>
  );
}