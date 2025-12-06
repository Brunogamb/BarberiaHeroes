import React from "react";
import styles from "./Servicios.module.css";

export default function Servicios({ onSelect }) {
    const services = {
        alisados: [{ name: "Alisado con y sin formol", price: "Desde $15.000 a $70.000" }],
        barberia: [
        { name: "Arreglo de barba", price: "$15.000" },
        { name: "Corte", price: "$15.000" },
        { name: "Corte + arreglo de barba", price: "$18.000" },
        { name: "Corte + Lata bebida + lavado", price: "$18.000" },
        { name: "Corte pelo largo", price: "$20.000" },
        { name: "Corte y barba + Lata bebida + lavado", price: "$22.000" },
        { name: "Corte y barba + perfilado de cejas", price: "$21.000" },
        { name: "Corte y perfilado de Cejas", price: "$18.000" },
        { name: "Diseño y Perfilado de Cejas", price: "$7.000" }
        ],
        lavado: [
        { name: "Lavado", price: "$5.000" },
        { name: "Lavado nutritivo", price: "$8.000" },
        { name: "Perfilado", price: "$3.000" },
        { name: "Rapado", price: "$10.000" }
        ],
        color: [
        { name: "Claritos", price: "Desde $35.000" },
        { name: "Decoloración Global + corte", price: "Desde $40.000 a $70.000" },
        { name: "Platinado", price: "Consultar" }
        ],
        combos: [
        { name: "Experiencia Héroes Capitán", price: "$35.000" },
        { name: "Experiencia Héroes Thanos", price: "$68.000" },
        { name: "Experiencia Héroes Wolverine", price: "$45.000" }
        ],
        limpiezaCutis: [
        { name: "Limpieza facial", price: "$15.000" },
        { name: "Limpieza facial + Diseño y perfilado de cejas", price: "Desde $20.000" }
        ],
        limpiezaFacial: [{ name: "Renovación Facial", price: "$20.000" }],
        masajes: [
        { name: "Masaje (1 hora)", price: "$20.000" },
        { name: "Sillón masajeador (30 minutos)", price: "$10.000" },
        { name: "Sillón masajeador(15 minutos)", price: "$5.000" }
        ],
        rulos: [{ name: "Permanente de rulos", price: "$40.000 a $100.000" }]
    };

    function renderList(list) {
        return list.map((service) => (
        <div className={styles["service-item"]} key={service.name}>
            <div className={styles["service-left"]}>
            <h3 className={styles["service-name"]}>{service.name}</h3>
            </div>
            <div className={styles["service-right"]}>
            <span className={styles["service-price"]}>{service.price}</span>
            <button
                className={styles["reserve-btn"]}
                onClick={() => onSelect(service.name)}
                type="button"
            >
                Reservar
            </button>
            </div>
        </div>
        ));
    }

    return (
        <section className={styles["services-section"]} id="servicios">
        <div className="container">
            <div className={styles["services-grid"]}>
            <div className={styles.category}>
                <h2>ALISADOS</h2>
                <div className={styles["services-list"]}>{renderList(services.alisados)}</div>
            </div>

            <div className={styles.category}>
                <h2>BARBERÍA</h2>
                <div className={styles["services-list"]}>{renderList(services.barberia)}</div>
            </div>

            <div className={styles.category}>
                <h2>LAVADO</h2>
                <div className={styles["services-list"]}>{renderList(services.lavado)}</div>
            </div>

            <div className={styles.category}>
                <h2>COLOR</h2>
                <div className={styles["services-list"]}>{renderList(services.color)}</div>
            </div>

            <div className={styles.category}>
                <h2>COMBOS</h2>
                <div className={styles["services-list"]}>{renderList(services.combos)}</div>
            </div>

            <div className={styles.category}>
                <h2>LIMPIEZA DE CUTIS</h2>
                <div className={styles["services-list"]}>{renderList(services.limpiezaCutis)}</div>
            </div>

            <div className={styles.category}>
                <h2>LIMPIEZA FACIAL</h2>
                <div className={styles["services-list"]}>{renderList(services.limpiezaFacial)}</div>
            </div>

            <div className={styles.category}>
                <h2>MASAJES</h2>
                <div className={styles["services-list"]}>{renderList(services.masajes)}</div>
            </div>

            <div className={styles.category}>
                <h2>RULOS</h2>
                <div className={styles["services-list"]}>{renderList(services.rulos)}</div>
            </div>
            </div>
        </div>
        </section>
    );
}