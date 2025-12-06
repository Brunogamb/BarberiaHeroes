import React, { useState } from "react";
import Servicios from "./Servicios";
import Profesionales from "./Profesionales";
import Fecha from "./Fecha";
import Hora from "./Hora";

export default function TurnosFlow() {
    const [step, setStep] = useState(1);
    const [servicio, setServicio] = useState(null);
    const [profesional, setProfesional] = useState(null);
    const [fecha, setFecha] = useState(null);

    function resetAll() {
        setStep(1);
        setServicio(null);
        setProfesional(null);
        setFecha(null);
    }

    return (
        <div>
        {step === 1 && (
            <Servicios
            onSelect={(s) => {
                setServicio(s);
                setStep(2);
            }}
            />
        )}

        {step === 2 && (
            <Profesionales
            onSelect={(p) => {
                setProfesional(p);
                setStep(3);
            }}
            onBack={() => setStep(1)}
            />
        )}

        {step === 3 && (
            <Fecha
            onSelect={(f) => {
                setFecha(f);
                setStep(4);
            }}
            onBack={() => setStep(2)}
            />
        )}

        {step === 4 && (
            <Hora
            servicio={servicio}
            profesional={profesional}
            fecha={fecha}
            onBack={() => setStep(3)}
            onConfirmed={resetAll}
            />
        )}
        </div>
    );
}
