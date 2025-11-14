import { supabase } from '../lib/supabaseClient.js';

export function initConfirmarTurno() {

    function attach() {
        const btn = document.getElementById('confirmar-turno');
        if (!btn) return;

        if (btn.__confirmAttached) return;
        btn.__confirmAttached = true;

        btn.addEventListener('click', async () => {
        const profesional = localStorage.getItem('profesionalSeleccionado');
        const fecha = localStorage.getItem('fechaSeleccionada');
        const hora = document.getElementById('hora-seleccionada')?.textContent || '';
        const servicio = localStorage.getItem('servicioSeleccionado');

        if (!profesional || !fecha || !hora || !servicio) {
            alert('Por favor completá profesional, fecha, hora y servicio antes de confirmar.');
            return;
        }

        try {
            const { data, error } = await supabase.from('turnos').insert([
            { servicio, profesional, fecha, hora }
            ]);
            if (error) {
            alert('❌ Error al guardar el turno: ' + error.message);
            console.error('Supabase insert error', error);
            return;
            }

            alert('✅ Turno guardado correctamente!');
            localStorage.clear();
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert('❌ Error inesperado al guardar el turno.');
        }
        });
    }

    attach();

    const observer = new MutationObserver(() => attach());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
}