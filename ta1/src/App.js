// App.js
import React from 'react';
import './App.css';
import Contenido from "./componentes/Contenido/";
import Card from "./componentes/Card";

// LO COMENTADO ES PARTE DE LA TA1

// const Card = ({ titulo, descripcion, asignado, startDate, endDate }) => {
//   return (
//     <div className="card" style={styles.card}>
//       <h3 className="card-titulo" style={styles.titulo}>{titulo}</h3>
//       <p className="card-descripcion" style={styles.descripcion}>{descripcion}</p>
//       <p className="card-asignado" style={styles.asignado}>Asignado a: {asignado}</p>
//       <p className="card-dates" style={styles.dates}>Fecha de inicio: {startDate}</p>
//       <p className="card-dates" style={styles.dates}>Fecha de fin: {endDate}</p>
//     </div>
//   );
// };


// const styles = {
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '16px',
//     margin: '10px',
//     width: '250px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     display: 'inline-block',
//   },
//   titulo: {
//     fontSize: '1.5em',
//     marginBottom: '10px',
//   },
//   descripcion: {
//     margin: '10px 0',
//   },
//   asignado: {
//     fontSize: '0.9em',
//     color: '#555',
//   },
//   dates: {
//     fontSize: '0.9em',
//     color: '#555',
//   },
// };

function App() {
  // const cardsData = [
  //   {
  //     titulo: "Proyecto A",
  //     descripcion: "Descripción del proyecto A.",
  //     asignado: "Juan Pérez",
  //     startDate: "2024-09-01",
  //     endDate: "2024-09-15",
  //   },
  //   {
  //     titulo: "Proyecto B",
  //     descripcion: "Descripción del proyecto B.",
  //     asignado: "María López",
  //     startDate: "2024-09-05",
  //     endDate: "2024-09-20",
  //   },
  //   {
  //     titulo: "Proyecto C",
  //     descripcion: "Descripción del proyecto C.",
  //     asignado: "Carlos Sánchez",
  //     startDate: "2024-09-10",
  //     endDate: "2024-09-25",
  //   },

  // ];

  return (
    <div className="App">
      <div className="cards-container" style={{ display: 'flex', justifyContent: 'center' }}>
        {/* {cardsData.map((card) => (
          <Card
            titulo={card.titulo}
            descripcion={card.descripcion}
            asignado={card.asignado}
            startDate={card.startDate}
            endDate={card.endDate}
          />
        ))} */}

        <Card>
          <Contenido
            titulo="Proyecto A"
            descripcion="Descripción del proyecto A."
            asignado="Juan Pérez"
            startDate="2024-09-01"
            endDate="2024-09-15"
          />
        </Card>
        <Card>
          <Contenido
            titulo="Proyecto B"
            descripcion="Descripción del proyecto B."
            asignado="María López"
            startDate="2024-09-05"
            endDate="2024-09-20"
          />
        </Card>
        <Card>
          <Contenido
            titulo="Proyecto C"
            descripcion="Descripción del proyecto C."
            asignado="Carlos Sánchez"
            startDate="2024-09-10"
            endDate="2024-09-25"
          />
        </Card>
      </div>
    </div>
  );
}

export default App;
