import React from "react"

export default function Info({strengths}) {
    return(
        <>
        {strengths.map(strength => (
        <button key={strength} className={strength}>{strength}</button>
        ))}
        </>
    )
}