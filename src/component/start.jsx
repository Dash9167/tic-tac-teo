import React, { useState } from "react";

const Start = () => {
  let [board, setboard] = useState(Array(9).fill(""));
  let [count, setcount] = useState(0);
  let [lock, setlock] = useState(false);
  let [mssg, setmssg] = useState("");
  const [hidden, sethiddem] = useState(false);
  let nextbord = board.slice();

  const togggle = (e, num) => {
    if (lock || board[num]) {
      return;
    }

    if (count % 2 === 0) {
      nextbord[num] = "0";
      setboard(nextbord);
      setcount(count + 1);

      e.target.innerHTML = nextbord[num];
    } else {
     
      nextbord[num] = "x";
      setboard(nextbord);
      setcount(count + 1);
      e.target.innerHTML = nextbord[num];
    }
    checkwin(nextbord);
  };

  const checkwin = (nextbord) => {
    if (
      nextbord[0] === nextbord[1] &&
      nextbord[1] === nextbord[2] &&
      nextbord[2] !== ""
    ) {
      won(nextbord[0]);
      setmssg(
        nextbord[2] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[3] === nextbord[4] &&
      nextbord[4] === nextbord[5] &&
      nextbord[5] !== ""
    ) {
      won(nextbord[3]);
      setmssg(
        nextbord[5] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[6] === nextbord[7] &&
      nextbord[7] === nextbord[8] &&
      nextbord[8] !== ""
    ) {
      won(nextbord[6]);
      setmssg(
        nextbord[8] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[0] === nextbord[3] &&
      nextbord[3] === nextbord[6] &&
      nextbord[6] !== ""
    ) {
      won(nextbord[0]);
      setmssg(
        nextbord[6] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[1] === nextbord[4] &&
      nextbord[4] === nextbord[7] &&
      nextbord[7] !== ""
    ) {
      won(nextbord[1]);
      setmssg(
        nextbord[7] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[2] === nextbord[5] &&
      nextbord[5] === nextbord[8] &&
      nextbord[8] !== ""
    ) {
      won(board[2]);
      setmssg(
        nextbord[8] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[0] === nextbord[4] &&
      nextbord[4] === nextbord[8] &&
      nextbord[8] !== ""
    ) {
      won(board[0]);
      setmssg(
        nextbord[8] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
    if (
      nextbord[2] === nextbord[4] &&
      nextbord[4] === nextbord[6] &&
      nextbord[6] !== ""
    ) {
      won(nextbord[2]);
      setmssg(
        nextbord[2] === "x"
          ? "congratulation x win the match"
          : "congratulation o win the match"
      );
    }
  };

  let won = (winner) => {
    setlock(true);
    sethiddem(true);
  };
  let resetboard = () => {
    setboard(Array(9).fill(""));
    setlock(false);
    setcount(0);
    sethiddem(false);
    setmssg("");
  };
  return (
    <div className="bords">
      <p className={hidden ? "gayab" : ""}>
        Player {count % 2 === 0 ? "o" : "x"} turn
      </p>
      <h3>{mssg}</h3>
      <div className="row1">
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 0);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 1);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 2);
          }}
        ></div>
      </div>
      <div className="row1">
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 3);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 4);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 5);
          }}
        ></div>
      </div>
      <div className="row1">
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 6);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 7);
          }}
        ></div>
        <div
          className="boxes"
          onClick={(e) => {
            togggle(e, 8);
          }}
        ></div>
      </div>

      <input type="button" onClick={resetboard} value="Reset" />
    </div>
  );
};
export default Start;
