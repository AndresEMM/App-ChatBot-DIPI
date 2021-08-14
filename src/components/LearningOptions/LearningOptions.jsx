import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Javascript",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { text: "DITI Info", handler: props.actionProvider.handleDitiInfo, id: 2 },
    { text: "tienes emociones?", handler: props.actionProvider.handleDitiFeels, id: 3 },
    { text: "que comida te gusta?", handler: props.actionProvider.handleDitiFood, id: 4 },
    /*{ text: "APIs", handler: () => {}, id: 3 },
    { text: "Security", handler: () => {}, id: 4 },
    { text: "Interview prep", handler: () => {}, id: 5 },*/
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;