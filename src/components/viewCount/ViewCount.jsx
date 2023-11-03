import React, { useState, useEffect } from "react";

function ViewCount() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    // Obtener el contador de visitas desde sessionStorage al cargar la página
    const visitasGuardadas = sessionStorage.getItem("visitas");
    // Si hay un valor en sessionStorage, usarlo como contador inicial
    if (visitasGuardadas) {
      setContador(parseInt(visitasGuardadas));
    } else {
      // Si no hay valor en sessionStorage, establecer el contador en 0
      sessionStorage.setItem("visitas", 0);
    }

    // Incrementar el contador y guardar en sessionStorage al cargar la página
    setContador(contador + 1);
    sessionStorage.setItem("visitas", contador + 1);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <p>Contador de Visitas: {contador}</p>
    </div>
  );
}

export default ViewCount;
