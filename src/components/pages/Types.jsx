import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Children } from "react";

let selectedType = "none";

function Types(props) {
  const [shownType, setShownType] = useState("");
  const [strengths, setStrengths] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [noEffectAgainst, setNoEffectAgainst] = useState("");
  const [noEffectFrom, setNoEffectFrom] = useState("");



  let currentType = {};
  
    let infoZone = document.getElementById("info-zone");



{/* <article>
{noEffectFrom} attacks will have no effect against {shownType.type}
</article>
} 
if (noEffectAgainst) { 
<article>
{shownType.type} attacks will have no effect against {noEffectAgainst}
</article> */}



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
            if (type.noEffectAgainst) {
                setNoEffectAgainst(type.noEffectAgainst);
            }
            if (type.noEffectFrom) {
                setNoEffectFrom(type.noEffectFrom);
            }

            currentType = type;
            console.log(currentType);
            infoZone.setAttribute("class", "shown");
          }

          return (
            <button onClick={handleClick} key={type.type} className={type.type}>
              {type.type}
            </button>
          );
        })}
      </Row>
      <div style={{height:"50px"}}></div>
      <Row>
       <div id="info-zone" className="hidden">
        <h1>{shownType.type} Type</h1>
        <div>
{strengths}
        </div>
        </div> 
      </Row>

    </>
  );
}

export default Types;
