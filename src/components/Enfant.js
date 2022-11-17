import React from "react";
import { useSelector } from "react-redux";

const Enfant = () => {
  const { color } = useSelector((state) => state.couleur);

  return (
    <div>
      Je suis l'enfant et la couleur séléctionné dans le parent est le:
      <span style={{ color: color }}> {color}</span>
    </div>
  );
};

export default Enfant;
