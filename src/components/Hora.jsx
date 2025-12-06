import React, { useState } from "react";
import styles from "./Hora.module.css";
import { supabase } from "../lib/supabaseClient";

/**
 * Props:
 * - servicio (string)
 * - profesional (string)
 * - fecha (string DD/MM/YYYY)
 * - onBack() => void
 * - onConfirmed() => void  // callback cuando se guardó el turno
 */
export default function Hora({ servicio, profesional, fecha, onBack, onConfirmed }) {
  const horarios = ['09:00','10:00','11:00','12:00','14:00','15:00','16:00','17:00'];
  const [hora, setHora] = useState(null);
  const [loading, setLoading] = useState(false);

  function seleccionarHora(h) {
    setHora(h);
  }

  async function confirmarTurno() {
    if (!servicio || !profesional || !fecha || !hora) {
      alert("Completa profesional, fecha, hora y servicio antes de confirmar.");
      return;
    }

    // convertir DD/MM/YYYY a YYYY-MM-DD
    const [day, month, year] = fecha.split("/");
    const fechaSupabase = `${year}-${month}-${day}`;

    setLoading(true);
    try {
      const { error } = await supabase.from("turnos").insert([
        { servicio, profesional, fecha: fechaSupabase, hora }
      ]);
      if (error) {
        alert("❌ Error al guardar el turno: " + error.message);
        console.error(error);
        return;
      }
      alert("✅ Turno guardado correctamente");
      if (onConfirmed) onConfirmed();
    } catch (err) {
      console.error(err);
      alert("❌ Error inesperado al guardar el turno");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={styles["turno-section"]}>
      <div className="container">
        <button className={styles["back-btn"]} onClick={onBack} type="button">Volver</button>

        <div className={styles["turno-card"]}>
          <h2 className={styles["turno-title"]}>ELEGÍ EL HORARIO</h2>

          <div id="horarios-grid" className={styles["grid-horarios"]}>
            {horarios.map(h => (
              <button
                key={h}
                className={`${styles["grid-item"]} ${hora === h ? styles.selected : ""}`}
                onClick={() => seleccionarHora(h)}
                type="button"
              >
                {h}
              </button>
            ))}
          </div>

          <div className={`${styles.resumen} ${!hora ? styles.hidden : ""}`} id="resumen-turno">
            <h3>Turno seleccionado</h3>
            <p><strong>Servicio:</strong> {servicio}</p>
            <p><strong>Profesional:</strong> {profesional}</p>
            <p><strong>Fecha:</strong> {fecha}</p>
            <p><strong>Hora:</strong> {hora}</p>
            <button className={styles["btn-primary"]} onClick={confirmarTurno} disabled={loading} type="button">
              {loading ? "Guardando..." : "Confirmar Turno"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}