import Types from "./Types"

const typeList = [
    {
        type: "Bug",
        strengths:["Grass", "Psychic", "Dark"],
        weaknesses:["Fire", "Flying", "Rock"],
    },
    {
        type: "Dark",
        strengths:["Psychic", "Ghost"],
        weaknesses:["Fighting", "Bug", "Fairy"],
        noEffectFrom:["Psychic"],
    },
    {
        type: "Dragon",
        strengths:["Dragon"],
        weaknesses:["Dragon", "Ice", "Fairy"],
        noEffectAgainst:["Fairy"],
    },
    {
        type: "Electric",
        strengths:["Water", "Flying"],
        weaknesses:["Ground"],
        noEffectAgainst:["Ground"],
    },
    {
        type: "Fairy",
        strengths:["Fighting", "Dragon", "Dark"],
        weaknesses:["Poison", "Steel"],
        noEffectFrom:["Dragon"],
    },
    {
        type: "Fighting",
        strengths:["Normal", "Ice", "Rock", "Dark", "Steel"],
        weaknesses:["Flying", "Psychic", "Fairy"],
        noEffectAgainst:["Ghost"],
    },
    {
        type: "Fire",
        strengths:["Bug", "Grass", "Ice" , "Steel"],
        weaknesses:["Water", "Ground", "Rock"],
    },
    {
        type: "Flying",
        strengths:["Bug", "Fighting", "Grass"],
        weaknesses:["Electric", "Ice", "Rock"],
        noEffectFrom:["Ground"],
    },
    {
        type: "Ghost",
        strengths:["Fighting", "Ghost"],
        weaknesses:["Dark", "Ghost",],
        noEffectAgainst:["Normal"],
        noEffectFrom:["Fighting", "Normal"],
    },
    {
        type: "Grass",
        strengths:["Ground", "Rock", "Water"],
        weaknesses:["Bug", "Fire", "Flying", "Ice", "Poison"],
    },
    {
        type: "Ground",
        strengths:["Electric", "Fire", "Poison", "Rock", "Steel"],
        weaknesses:["Grass", "Ice", "Water"],
        noEffectFrom:["Electric"],
    },
    {
        type: "Ice",
        strengths:["Dragon", "Flying", "Grass", "Ground" ],
        weaknesses:["Fire", "Fighting", "Rock", "Steel"],
    },
    {
        type: "Normal",
        weaknesses:["Fighting"],
        noEffectAgainst:["Ghost"],
        noEffectFrom:["Ghost"],
    },
    {
        type: "Poison",
        strengths:["Fairy", "Grass"],
        weaknesses:["Ground", "Psychic"],
        noEffectAgainst:["Steel"],
    },
    {
        type: "Psychic",
        strengths:["Fighting", "Poison"],
        weaknesses:["Bug", "Dark", "Ghost"],
        noEffectAgainst:["Dark"],
    },
    {
        type: "Rock",
        strengths:["Bug", "Fire", "Flying", "Ice"],
        weaknesses:["Fighting", "Grass", "Ground", "Steel", "Water"],
    },
    {
        type: "Steel",
        strengths:["Fairy", "Ice", "Rock"],
        weaknesses:["Fire", "Fighting", "Ground"],
        noEffectFrom:["Poison"],
    },
    {
        type: "Water",
        strengths:["Fire", "Ground", "Rock"],
        weaknesses:["Electric", "Grass"],
    },
]

function TypeButtons() {
    return <Types typeList={typeList} />;
  }
  
  export default TypeButtons;