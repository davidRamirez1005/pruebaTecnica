import React from "react";
import style from "../../assets/css/home.module.css";
import Aside from "./components/Aside";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-1">
        <Aside></Aside>
      </div>
      <div className="col-span-4">
        <Section></Section>
      </div>
    </div>
  );
}
