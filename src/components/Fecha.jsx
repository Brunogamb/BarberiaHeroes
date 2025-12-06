import React, { useState, useEffect } from "react";
import styles from "./Fecha.module.css";

const monthNames = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

export default function Fecha({ onSelect, onBack }) {
    const today = new Date();
    const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
    const [selectedDay, setSelectedDay] = useState(null);

    function renderCalendarGrid() {
        const firstDay = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
        const days = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate();

        const cells = [];

        // empty placeholders
        for (let i = 0; i < firstDay; i++) {
        cells.push(<div key={`e-${i}`} className={`${styles["calendar-cell"]} ${styles.empty}`} />);
        }

        for (let d = 1; d <= days; d++) {
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), d);
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isSelected = selectedDay === d && viewDate.getMonth() === (new Date().getMonth())? true : selectedDay === d && (
            selectedDay && viewDate.getFullYear() === (selectedDay.year ?? viewDate.getFullYear())
        );
        cells.push(
            <button
            key={`d-${d}`}
            className={`${styles["calendar-cell"]} ${isPast ? styles.disabled : ""} ${selectedDay === d ? styles.selected : ""}`}
            onClick={() => {
                if (isPast) return;
                setSelectedDay(d);
                const day = String(d).padStart(2, "0");
                const month = String(viewDate.getMonth() + 1).padStart(2, "0");
                const year = viewDate.getFullYear();
                const fecha = `${day}/${month}/${year}`;
                onSelect(fecha);
            }}
            disabled={isPast}
            type="button"
            >
            {d}
            </button>
        );
        }

        return cells;
    }

    return (
        <section className={styles["turno-section"]}>
        <div className="container">
            <button className={styles["back-btn"]} onClick={onBack} type="button">Volver</button>

            <div className={styles["turno-card"]}>
            <h2 className={styles["turno-title"]}>ELEGÍ LA FECHA</h2>

            <div className={styles.calendar}>
                <div className={styles["calendar-header"]}>
                <button className={styles["calendar-nav"]} onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} type="button">&lt;</button>
                <div className={styles["calendar-title"]}>{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</div>
                <button className={styles["calendar-nav"]} onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} type="button">&gt;</button>
                </div>

                <div className={styles["calendar-weekdays"]}>
                <div>Do</div><div>Lu</div><div>Ma</div><div>Mi</div><div>Ju</div><div>Vi</div><div>Sá</div>
                </div>

                <div className={styles["calendar-grid"]}>
                {renderCalendarGrid()}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}