import React from "react";
import propTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SecondsCounter = (props) => {
  SecondsCounter.propTypes = {
    digitSix: propTypes.number,
    digitFive: propTypes.number,
    digitFour: propTypes.number,
    digitThree: propTypes.number,
    digitTwo: propTypes.number,
    digitOne: propTypes.number,
  };

  return (
    <div className="bg-reloj">
      <div className="container-fluid d-flex flex-row justify-content-center p-5 ">
        <div className="reloj me-3 px-5 py-5 bg-dark text-light">
          <i className="fs-1 fa-solid fa-clock "></i>
        </div>

        <div className="number Six mx-3 py-5 px-5 bg-dark  text-light">
          <h1>{props.digitSix % 10}</h1>
        </div>

        <div className="number Five mx-3 py-5 px-5 bg-dark text-light">
          <h1>{props.digitFive % 10}</h1>
        </div>

        <div className="number Four mx-3 py-5 px-5 bg-dark text-light">
          <h1>{props.digitFour % 10}</h1>
        </div>

        <div className="number Three mx-3 py-5 px-5 bg-dark text-light">
          <h1>{props.digitThree % 10}</h1>
        </div>

        <div className="number Two mx-3 py-5 px-5 bg-dark text-light">
          <h1>{props.digitTwo % 10}</h1>
        </div>

        <div className="number One mx-3 py-5 px-5 bg-dark text-light">
          <h1>{props.digitOne % 10}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondsCounter;
