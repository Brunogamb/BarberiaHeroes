import { supabase } from '../lib/supabaseClient.js';

export function initConfirmarTurno() {
    const btn = document.getElementById('confirmar-turno');
    if (!btn) return console.warn("⚠ No se encontró el botón Confirmar Turno");

    btn.addEventListener('click', async () => {
        const profesional = localStorage.getItem('profesionalSeleccionado');
        const fechaUsuario = localStorage.getItem('fechaSeleccionada'); 
        const hora = localStorage.getItem('horaSeleccionada');
        const servicio = localStorage.getItem('servicioSeleccionado');

        if (!profesional || !fechaUsuario || !hora || !servicio) {
            alert("⚠ Completa profesional, fecha, hora y servicio antes de confirmar.");
            return;
        }

        const [dia, mes, año] = fechaUsuario.split('/');
        const fechaSupabase = `${año}-${mes}-${dia}`;

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
            localStorage.clear();
            location.reload();

        } catch (err) {
            console.error(err);
            alert("❌ Error inesperado al guardar el turno");
        }
    });
}