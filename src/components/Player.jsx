import React from "react";
import players from "../players";
import saka from "/public/saka.jpeg";
import calafiori from "/public/calafiori.webp";
import martinelli from "/public/martinelli.webp";
import trossard from "/public/trossard.webp";

const Player = () => {
  return (
    <>
    <div className="outer-wrapper ">

      {players.map((player) => (
        <div
          className="card-grid"
         >
          <div className="card" style={{boxShadow: '0 3px 6px lightgray', borderRadius: "0.6em", overflow: 'hidden'}}>
            <div className="card-img">
              <img src={player.image} alt={player.name} />
            </div>
            <div className="player-info" style={{padding: '.8em', display: 'flex', flexDirection:'column', gap: '0.4rem'}}>
              <h3>{player.name}</h3>
              <span className="age">Age: {player.age}</span>
              
              <span className="nationality">
                Nationality: {player.nationality}
              </span>
              
              <span className="jerseyNumber">
                Jersey Number: {player.jerseyNumber}
              </span>
              <h4>{player.team}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Player;
