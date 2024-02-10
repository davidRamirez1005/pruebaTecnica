import React from "react";
import style from "../../../assets/css/section.module.css";
import libro2 from "../../../assets/img/dia-mundial-del-libro.png";
import Widget from "./Widget";
import Authors from "./Authors";
import Recent from "./Recent";
import Advertisement from "./Advertisement";

const Section = () => {
  return (
    <div>
      <div className={style.container}>
        <div className="grid grid-cols-6 gap-4">
          <div className="text-white p-4 col-span-4">
            <div className={style.presentation}>
              <div className="grid grid-cols-6 gap-2">
                <div className="col-span-4">
                  <h1 className={style.titulo}>
                    Hola, Andrés! Tienes ideas sobre un nuevo libro?
                  </h1>
                  <br />
                  <p>Vuelve tus libros tendencia mundial!</p>
                  <p>Quieres empezar a escribir una vez más?</p>
                  <br />
                  <div className={style.button}>
                    <p className="text-white">Crear Borrador ➕</p>
                  </div>
                </div>
                <div className={`${style.img} col-span-2`}>
                  <img src={libro2} alt="libro" />
                </div>
              </div>
            </div>
            <br />
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-3">
                <div className="grid grid-cols-4 gap-4">
                  <Widget title="Librería" value="124" />
                  <Widget title="Me Gusta" value="155 K" />
                  <Widget title="Lectores" value="8 K" />
                  <Widget title="Opiniones" value="163 K" />
                </div>
                <br />
                <div className={`${style.contAuthores}grid grid-cols`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-2xl text-black font-bold">Autores</h1>
                    </div>
                    <div>
                      <br />
                      <div className="mt-2">
                        <p className={`${style.buttonVerMas} cursor-pointer`}>
                          Ver Todo
                        </p>
                      </div>
                    </div>
                  </div>
                  <Authors></Authors>
                  <hr />
                  <Authors></Authors>
                  <hr />
                  <Authors></Authors>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl text-black font-bold">Recientes</h1>
                  </div>
                  <div>
                    <br />
                    <div className="mt-2">
                      <p className={`${style.buttonVerMas} cursor-pointer`}>
                        Ver Todo
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <Recent
                    usuario="Victoria Evans"
                    comentario=" Ha comentado en La ciudadela"
                    fecha="May 7"
                  ></Recent>
                </div>
                <br />
                <hr />
                <br />
                <div>
                  <Recent
                    usuario="Ethan lliams"
                    comentario="ha comenzado a seguirte"
                    fecha="May 5"
                  ></Recent>
                </div>
                <br />
                <hr />
                <br />
                <div>
                  <Recent
                    usuario="Nathan fox"
                    comentario="le ha gustado innolvidable"
                    fecha="May 7"
                  ></Recent>
                </div>
                <br />
                <hr />
                <br />
                <div>
                  <Recent
                    usuario="Megan wasl"
                    comentario="le ha gustado innolvidable"
                    fecha="May 17"
                  ></Recent>
                </div>
              </div>
            </div>
            <br />
            <div>
              <Advertisement></Advertisement>
            </div>
          </div>
          <div className={`${style.bar} p-4 col-span-2`}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl text-black font-bold">Lo Último</h1>
              </div>
              <div>
                <br />
                <div className="mt-2">
                  <p className={`${style.buttonVerMas} cursor-pointer`}>
                    Ver Todo
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <br />
              <div className="flex gap-4">
                <p className="text-lg">Reciente</p>
                <p className="text-lg text-gray-500">Popular</p>
              </div>
            </div>
            <div className={style.contImg}>
              <img
                className={style.imgBar}
                src="https://img.freepik.com/foto-gratis/fondo-patron-hojas-palma-tropical-diseno-decoracion-follaje-arbol-monstera-verde-planta-primer-plano-hoja-exotica_90220-1135.jpg"
                alt=""
              />
            </div>
            <div className={style.asaide}>
              <br />
              <div>
                <p className="text-black font-bold">La Ciudadela</p>
              </div>
              <p>
                Descubre las maravillas escondidas en los bosques de Estados
                Unidos
              </p>
              <div>
                <br />
                <div className="flex items-center mt-4">
                  <div className={`${style.person} mr-5 p-4`}>
                    <img
                      className="w-16 h-16"
                      src="https://miro.medium.com/v2/resize:fit:1224/1*XKpA4-JcY06QcMOiPB1zaQ.jpeg"
                      alt="Author"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-xl text-black font-bold">
                        David Jones
                      </p>
                    </div>
                    <div className="text-gray-500">May 6, 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className={style.contImg}>
              <img
                className={style.imgBar}
                src="https://i.blogs.es/921916/fotos-tierra-hechas-con-iphone-12-inspiration4-spacex/1366_2000.jpg"
                alt=""
              />
            </div>
            <div className={style.asaide}>
              <br />
              <div>
                <p className="text-black font-bold">La Ciudadela</p>
              </div>
              <p>
                Descubre las maravillas escondidas en los bosques de Estados
                Unidos
              </p>
              <div>
                <br />
                <div className="flex items-center mt-4">
                  <div className={`${style.person} mr-5 p-4`}>
                    <img
                      className="w-16 h-16"
                      src="https://miro.medium.com/v2/resize:fit:1224/1*XKpA4-JcY06QcMOiPB1zaQ.jpeg"
                      alt="Author"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-xl text-black font-bold">
                        David Jones
                      </p>
                    </div>
                    <div className="text-gray-500">May 6, 2020</div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
