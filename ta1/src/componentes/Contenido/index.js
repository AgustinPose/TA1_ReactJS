import React from "react";

const Contenido = ({ titulo, descripcion, asignado, startDate, endDate }) => {
  return (
    <>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p>Asignado a: {asignado}</p>
      <p>Fecha de inicio: {startDate}</p>
      <p>Fecha de fin: {endDate}</p>
    </>
  );
};

export default Contenido;