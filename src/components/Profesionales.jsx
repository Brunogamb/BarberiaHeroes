import React from "react";
import styles from "./Profesionales.module.css";

const professionals = [
    { name: "JEAN", img: "/BarberiaHeroes/profesionales/jean.webp" },
    { name: "JERO ALASINO", img: "/BarberiaHeroes/profesionales/jeroalasino.webp" },
    { name: "TOMI GORDILLO", img: "/BarberiaHeroes/profesionales/tomigordillo.webp" },
    { name: "VALENTIN FERNÁNDEZ", img: "/BarberiaHeroes/profesionales/valentinfernandez.webp" },
    { name: "ELIAS WAGNER", img: "/BarberiaHeroes/profesionales/eliaswagner.webp" },
    { name: "FERNANDO LOPEZ", img: "/BarberiaHeroes/profesionales/fernandolopez.webp" }
];

export default function Profesionales({ onSelect, onBack }) {
    return (
        <section className={styles["professionals-section"]} id="profesionales">
        <div className="container">
            <button className={styles["back-btn"]} onClick={onBack} type="button">
            Volver
            </button>

            <div className={styles["professionals-grid"]}>
            <h2>SELECCIONA UN PROFESIONAL</h2>

            <ul className={styles["professionals-list"]}>
                {professionals.map((p) => (
                <li key={p.name}>
                    <button className={styles["professional-item"]} onClick={() => onSelect(p.name)} type="button">
                    <h3>{p.name}</h3>
                    <img className={styles["professionals-img"]} src={p.img} alt={p.name} />
                    </button>
                </li>
                ))}
            </ul>
            </div>
        </div>
        </section>
    );
}