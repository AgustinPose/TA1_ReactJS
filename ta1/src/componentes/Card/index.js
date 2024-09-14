import React from "react";

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'inline-block',
  },
};

const Card = ({ children }) => {
  return <div style={styles.card}>{children}</div>; // Aplica el estilo al div
};

export default Card;
