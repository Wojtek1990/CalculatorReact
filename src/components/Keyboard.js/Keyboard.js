import "./Keyboard.css";
// import Tile from "./Tile";
import Tile from "./Tile";
import { Input } from "reactstrap";
import { useState } from "react";
import CustomAlert from "../Alert/CustomAlert";
import Notes from "../Notes/Notes";
import MyNote from "../MyNote/MyNote";
import { useEffect } from "react";
import { buttonsList } from "../buttonsList/buttonsList";
import { keyDownFunc } from "../containers/onKeyUpHandler";

export default function Keyboard() {
  let [term, setTerm] = useState("");
  let [term2, setTerm2] = useState("");
  let [alertState, setAlertState] = useState(false);
  let [notesState, setNotesState] = useState(false);
  let [message, setMessage] = useState();
  let [isInputUpdate, setInputUpdate] = useState(false);

  const focusInput = () => {
    const inputReference = document.querySelector(".res");
    inputReference.focus();
  };

  useEffect(() => {
    focusInput();
  }, [term]);

  const updateTerm = (e) => {
    setTerm(e.target.value);
  };
  const changeInputUpdate = () => {
    setInputUpdate(true);
    setTimeout(() => {
      setInputUpdate(false);
    }, 1);
  };
  const onKeyDownHandler = (e) => {
    switch (e.key) {
      case "Enter":
        clickHeandler("=");
        keyDownFunc("b24");
        break;
      case "1":
        keyDownFunc("b17");
        changeInputUpdate();
        break;
      case "2":
        keyDownFunc("b18");
        changeInputUpdate();
        break;
      case "3":
        keyDownFunc("b19");
        changeInputUpdate();
        break;
      case "4":
        keyDownFunc("b13");
        changeInputUpdate();
        break;
      case "5":
        keyDownFunc("b14");
        changeInputUpdate();
        break;
      case "6":
        keyDownFunc("b15");
        changeInputUpdate();
        break;
      case "7":
        keyDownFunc("b9");
        changeInputUpdate();
        break;
      case "8":
        keyDownFunc("b10");
        changeInputUpdate();
        break;
      case "9":
        keyDownFunc("b11");
        changeInputUpdate();
        break;
      case "0":
        keyDownFunc("b22");
        changeInputUpdate();
        break;
      case "Backspace":
        clickHeandler("⌫");
        keyDownFunc("b4");
        break;
      case "Delete":
        clickHeandler("C");
        break;
      case "+":
        clickHeandler("+");
        keyDownFunc("b20");
        break;
      case "-":
        clickHeandler("－");
        keyDownFunc("b16");
        break;
      case "/":
        clickHeandler("/");
        keyDownFunc("b8");
        break;
      case "*":
        clickHeandler("x");
        keyDownFunc("b12");
        break;
      case ",":
        clickHeandler(",");
        keyDownFunc("b23");
        break;
      case "":
    }
    if (e.keyCode === 120) {
      clickHeandler("+/-");
      keyDownFunc("b21");
    }
  };
  let disabled = () => {
    if (term === "0") {
      return true;
    } else {
      return false;
    }
  };
  const handleMessageCHange = (event) => {
    setMessage(event.target.value);
  };
  const clickHeandler = (symbol) => {
    const comma = ".";
    term === 0 ? (disabled = true) : (disabled = false);
    if (symbol === "C") {
      setTerm("");
    } else if (symbol === "Notes") {
      if (notesState === false) {
        setNotesState(true);
      }
      if (notesState === true) {
        setNotesState(false);
        focusInput();
      }
    }
    //block  signs on the begining of string
    else if (
      term === "" &&
      (symbol === "+" ||
        symbol === "/" ||
        symbol === "－" ||
        symbol === "x" ||
        symbol === "x²" ||
        symbol === "√")
    ) {
      setTerm(term);
    } else if (symbol === "CE") {
      setTerm("");
      setTerm2("");
    } else if (symbol === "⌫") {
      setTerm(term.toString().substring(0, term.length - 1));
    } else if (
      symbol === "1/x" &&
      !term.includes("x") &&
      !term.includes("/") &&
      !term.includes("+") &&
      !term.includes("－")
    ) {
      if (term === "" || term == 0) {
        setAlertState(true);
        setTimeout(() => {
          setAlertState(false);
        }, 6000);
      } else {
        let result = 1 / term;
        setTerm(result.toString());
        setTerm2(`1/${term}=`);
      }
    } else if (
      symbol === "x²" &&
      !term.includes("x") &&
      !term.includes("/") &&
      !term.includes("+") &&
      !term.includes("－")
    ) {
      let result = term * term;
      setTerm(result.toString());
      setTerm2(`${term} x ${term} =`);
    } else if (
      symbol === "√" &&
      !term.includes("x") &&
      !term.includes("/") &&
      !term.includes("+") &&
      !term.includes("－")
    ) {
      let result = Math.sqrt(term);
      setTerm(result.toString());
      setTerm2(`√${term} =`);
    } else if (symbol === "+/-") {
      let arrNegate = "";
      if (
        !term.includes("+") &&
        !term.includes("－") &&
        !term.includes("/") &&
        !term.includes("x")
      ) {
        arrNegate += `${-term}`;
        setTerm(arrNegate);
      }
      if (term.includes("+")) {
        let arrNegate = term.split("+");
        if (!arrNegate[1].includes("-")) {
          arrNegate[1] = `-${arrNegate[1]}`;
          let arr2 = arrNegate[0].concat("+", arrNegate[1]);
          console.log(arrNegate.toString());
          console.log(arr2);
          setTerm(arr2);
        }
      }
      if (term.includes("/")) {
        let arrNegate = term.split("/");
        if (!arrNegate[1].includes("-")) {
          arrNegate[1] = `-${arrNegate[1]}`;
          let arr2 = arrNegate[0].concat("/", arrNegate[1]);
          console.log(arrNegate.toString());
          console.log(arr2);
          setTerm(arr2);
        }
      }
      if (term.includes("x")) {
        let arrNegate = term.split("x");
        if (!arrNegate[1].includes("-")) {
          arrNegate[1] = `-${arrNegate[1]}`;
          let arr2 = arrNegate[0].concat("x", arrNegate[1]);
          console.log(arrNegate.toString());
          console.log(arr2);
          setTerm(arr2);
        }
      }
      if (term.includes("－")) {
        let arrNegate = term.split("－");
        if (!arrNegate[1].includes("-")) {
          arrNegate[1] = `-${arrNegate[1]}`;
          let arr2 = arrNegate[0].concat("－", arrNegate[1]);
          console.log(arrNegate.toString());
          console.log(arr2);
          setTerm(arr2);
        }
      }
    } else if (symbol === ",") {
      let arrcoma = term.split("+");
      let arrcoma2 = term.split("－");
      let arrcoma3 = term.split("x");
      let arrcoma4 = term.split("/");
      if (!term.includes(".")) {
        setTerm(term + comma);
      }
      if (arrcoma[1] && !arrcoma[1].includes(".")) {
        setTerm(term + comma);
      }
      if (
        arrcoma[1] === "" ||
        (arrcoma[1] === "-" && !arrcoma[1].includes("."))
      ) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma2[1] && !arrcoma2[1].includes(".")) {
        setTerm(term + comma);
      }
      if (
        arrcoma2[1] === "" ||
        (arrcoma2[1] === "-" && !arrcoma2[1].includes("."))
      ) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma3[1] && !arrcoma3[1].includes(".")) {
        setTerm(term + comma);
      }
      if (
        arrcoma3[1] === "" ||
        (arrcoma3[1] === "-" && !arrcoma3[1].includes("."))
      ) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma4[1] && !arrcoma4[1].includes(".")) {
        setTerm(term + comma);
      }
      if (
        arrcoma4[1] === "" ||
        (arrcoma4[1] === "-" && !arrcoma4[1].includes("."))
      ) {
        setTerm(term + 0 + comma);
      }
      if (term === "") {
        setTerm(0 + comma);
      }
    } else if (
      symbol === "/" ||
      symbol === "x" ||
      symbol === "+" ||
      symbol === "－" ||
      symbol === "="
    ) {
      let arr = "";
      arr += `${term}`;
      if (
        symbol !== "=" &&
        arr.charAt(arr.length - 1) !== "/" &&
        arr.charAt(arr.length - 1) !== "x" &&
        arr.charAt(arr.length - 1) !== "－" &&
        arr.charAt(arr.length - 1) !== "+" &&
        !arr.includes("+") &&
        !arr.includes("－") &&
        !arr.includes("x") &&
        !arr.includes("/")
      ) {
        arr += `${symbol}`;
      }
      let arrToString = arr.toString().replace(",", "");
      if (
        symbol === "+" ||
        symbol === "－" ||
        symbol === "/" ||
        symbol === "x"
      ) {
        setTerm(arrToString);
      } else if (symbol === "=") {
        if (arrToString.includes("+")) {
          let tab = arrToString.split("+");
          if (tab[1] !== "") {
            let result = parseFloat(tab[0]) + parseFloat(tab[1]);
            let numCommaDecimals = (result % 1).toString().length - 2;

            if (numCommaDecimals > 16) {
              tab[1].includes("-")
                ? setTerm2(`${parseFloat(tab[0])} + (${parseFloat(tab[1])}) =`)
                : setTerm2(`${parseFloat(tab[0])} + ${parseFloat(tab[1])} =`);
              setTerm(result.toFixed(8).toString());
            } else {
              tab[1].includes("-")
                ? setTerm2(`${parseFloat(tab[0])} + (${parseFloat(tab[1])}) =`)
                : setTerm2(`${parseFloat(tab[0])} + ${parseFloat(tab[1])} =`);
              setTerm(result.toString());
            }
          } else {
            setTerm(term);
          }
        }
        if (arrToString.includes("－")) {
          let tab = arrToString.split("－");
          if (tab[1] !== "" && tab[1] !== "-") {
            let result = parseFloat(tab[0]) - parseFloat(tab[1]);
            //function count number of decimals after comma
            let numCommaDecimals = (result % 1).toString().length - 2;
            if (numCommaDecimals > 16) {
              tab[1].includes("-")
                ? setTerm2(`${parseFloat(tab[0])} - (${parseFloat(tab[1])}) =`)
                : setTerm2(`${parseFloat(tab[0])} - ${parseFloat(tab[1])} =`);
              setTerm(result.toFixed(8).toString());
            } else {
              tab[1].includes("-")
                ? setTerm2(`${parseFloat(tab[0])} - (${parseFloat(tab[1])}) =`)
                : setTerm2(`${parseFloat(tab[0])} - ${parseFloat(tab[1])} =`);
              setTerm(result.toString());
            }
          } else {
            setTerm(term);
          }
        }
        if (arrToString.includes("/")) {
          let tab = arrToString.split("/");
          if (tab[1] !== "") {
            let result = parseFloat(tab[0]) / parseFloat(tab[1]);
            if (parseFloat(tab[1]) === 0 || parseFloat(tab[1]) === -0) {
              setAlertState(true);
              setTimeout(() => {
                setAlertState(false);
              }, 6000);
              let numCommaDecimals = (result % 1).toString().length - 2;
               if (numCommaDecimals > 16) {
                tab[1].includes("-")
                  ? setTerm2(
                      `${parseFloat(tab[0])} / (${parseFloat(tab[1])}) =`
                    )
                  : setTerm2(`${parseFloat(tab[0])} / ${parseFloat(tab[1])} =`);
                setTerm(result.toFixed(8).toString());
              } 
              // else {
              //   setTerm(result.toString());
              //   tab[1].includes("-")
              //     ? setTerm2(
              //         `${parseFloat(tab[0])} / (${parseFloat(tab[1])}) =`
              //       )
              //     : setTerm2(`${parseFloat(tab[0])} / ${parseFloat(tab[1])} =`);
              // }
            } else {
              tab[1].includes("-")
                  ? setTerm2(
                      `${parseFloat(tab[0])} / (${parseFloat(tab[1])}) =`
                    )
                  : setTerm2(`${parseFloat(tab[0])} / ${parseFloat(tab[1])} =`);
              setTerm(result.toString());
            }
          }
        }
        if (arrToString.includes("x")) {
          let tab = arrToString.split("x");
          if (tab[1] !== "") {
            let result = parseFloat(tab[0]) * parseFloat(tab[1]);
            setTerm(result.toString());
            tab[1].includes("-")
              ? setTerm2(`${parseFloat(tab[0])} * (${parseFloat(tab[1])}) =`)
              : setTerm2(`${parseFloat(tab[0])} * ${parseFloat(tab[1])} =`);
          }
        }
      }
    } else if (symbol !== "1/x" && symbol !== "x²" && symbol !== "√") {
      setTerm(term + symbol);
    }
  };

  return (
    <div className="container">
      <div className="notes">
        {notesState ? (
          <Notes
            value={message}
            onChange={handleMessageCHange}
            placeholder="Notes..."
          />
        ) : (
          <MyNote />
        )}
      </div>
      <div className="calculator">
        <div className="resultSmall">
          <Input
            disabled
            id="calc"
            type="text"
            className="text-end resultInput"
            value={term2}
          ></Input>
        </div>
        <div className="rescontainer">
          <Input
            maxLength={16}
            placeholder="0"
            type="text"
            className="text-end res"
            onChange={isInputUpdate ? updateTerm : null}
            onKeyDown={onKeyDownHandler}
            value={term}
            id="mainInput"
          ></Input>
        </div>

        <div className="keyboard">
          {buttonsList.map((button) => (
            <Tile
              id={button.id}
              mark={button.mark}
              className={button.className}
              onClick={() => clickHeandler(button.mark)}
            />
          ))}
        </div>
        {alertState ? <CustomAlert /> : null}
      </div>
    </div>
  );
}
