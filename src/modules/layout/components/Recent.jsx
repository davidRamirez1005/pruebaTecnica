import React from "react";
import style from "../../../assets/css/recent.module.css";

export default function Recent({ usuario, comentario, fecha }) {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 items-center justify-center">
          <span>{usuario}</span>
          <p>{comentario}</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-gray-500">{fecha}</p>
        </div>
      </div>
    </div>
  );
}
