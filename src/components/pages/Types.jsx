import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { Children } from "react";
import classNames from "classnames";
let strong = [];
import {Info, strength} from "./Info";

let selectedType = "none";

function Types(props) {
  const [shownType, setShownType] = useState("");
  const [strengths, setStrengths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [noEffectAgainst, setNoEffectAgainst] = useState("");
  const [noEffectFrom, setNoEffectFrom] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  let infoClass = "info hidden";
  if (isPressed) infoClass = "info shown";

  let currentType = {};

  let infoZone = document.getElementById("info-zone");

  return (
    <>
      <h1>Which TYPE do you want to know about?</h1>
      <Row className="type-list-container">
        {props.typeList.map((type) => {
          async function handleClick(e) {
            e.preventDefault();
            selectedType = type;
            setShownType(type);
            setStrengths(type.strengths);
            setWeaknesses(type.weaknesses);
            setIsPressed(true);
            if (type.noEffectAgainst) {
              setNoEffectAgainst(type.noEffectAgainst);
            }
            if (type.noEffectFrom) {
              setNoEffectFrom(type.noEffectFrom);
            }

            currentType = type;
            console.log(currentType);

          }

          return (
            <button onClick={handleClick} key={type.type} className={type.type}>
              {type.type}
            </button>
          );
        })}
      </Row>
      <div style={{ height: "50px" }}></div>
      <Row>
        <div id="info-zone" className={infoClass}>
          <h1>{shownType.type} Type</h1>
          <p>{shownType.type} is strong against </p>
<Info strengths={shownType.strengths} />
        </div>
      </Row>
      <footer>
      <button onMouseDown={()=>setIsPressed(false)}>
        Do you have another query?
      </button>
    </footer>
    </>
  );
}

export default Types;
