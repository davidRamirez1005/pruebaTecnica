import React from "react";
import style from '../../../assets/css/widget.module.css';

export default function Widget({ title, value }) {
  return (
    <div>
      <div className={`${style.widget} p-4`}>
        <div>
          <p className={style.titulo}>{title}</p>
        </div>
        <div>
          <p className={style.value}>{value}</p>
        </div>
      </div>
    </div>
  );
}
