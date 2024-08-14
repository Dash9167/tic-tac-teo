import React, { useState } from "react";
import Start from "./start";

export const Game = () => {
    const [game,setgame]=useState(false);
    const [button,setbutton]=useState("Start Now");
    const [hidden,sethiddem]=useState(false);

    let mssg

    const start=()=>{
        setgame(true);
        setbutton("Reset Board");
sethiddem(true)
         mssg=false;

    }
    
  return (
    <div className="App">
      <div className="game">
        <p className={hidden ? "gayab" : ""} >Click to Start Game </p>
        <br />
    { game ?<Start props={mssg}/>: ""}
        <input type="button" className={hidden ? "gayab" : ""}  onClick={start} value={button} />
      </div>
    </div>
  );
};
