import "./Keyboard.css";
import Tile from "./Tile";
import { Input } from "reactstrap";
import {  useState } from "react";
import CustomAlert from "../CustomAlert";
import Notes from "../Notes/Notes";
import MyNote from "../MyNote/MyNote";
import { useEffect } from "react";

import { keyDownFunc } from "../onKeyUpHandler";

export default function Keyboard() {
  let [term, setTerm] = useState("");
  let [term2, setTerm2] = useState("");
  let [alertState, setAlertState] = useState(false);
  let [notesState, setNotesState] = useState(false);
  let [message, setMessage] = useState();
  let [isInputUpdate, setInputUpdate] = useState(false);

  //nie działa useRef kurwa jego mać
  //  const inputRef = useRef()
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
        // keyDownFunc('b3')
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
        // notesState === false ? setNotesState(true) : setNotesState(false);
      }
      if (notesState === true) {
        setNotesState(false);
        focusInput();
      }
    }
    //blokuje wstawianie znaków na początku
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
      if (arrcoma[1] === "" || arrcoma[1]==='-'&& !arrcoma[1].includes(".")) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma2[1] && !arrcoma2[1].includes(".")) {
        setTerm(term + comma);
      }
      if (arrcoma2[1] === "" || arrcoma2[1]==='-'  && !arrcoma2[1].includes(".")) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma3[1] && !arrcoma3[1].includes(".")) {
        setTerm(term + comma);
      }
      if (arrcoma3[1] === ""|| arrcoma3[1]==='-' && !arrcoma3[1].includes(".")) {
        setTerm(term + 0 + comma);
      }
      if (arrcoma4[1] && !arrcoma4[1].includes(".")) {
        setTerm(term + comma);
      }
      if (arrcoma4[1] === ""|| arrcoma4[1]==='-' && !arrcoma4[1].includes(".")) {
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
            let numCommaDecimals = (result % 1).toString().length-2;
            if (numCommaDecimals > 16){
              setTerm(result.toFixed(1).toString())
            }
            tab[1].includes("-")
              ? setTerm2(`${parseFloat(tab[0])} + (${parseFloat(tab[1])}) =`)
              : setTerm2(`${parseFloat(tab[0])} + ${parseFloat(tab[1])} =`);
          } else {
            setTerm(term);
          }
        }
        if (arrToString.includes("－")) {
          let tab = arrToString.split("－");
          if (tab[1] !== "" && tab[1] !== "-") {
            let result = parseFloat(tab[0]) - parseFloat(tab[1]);
            //function count number of decimals after comma
            let numCommaDecimals = (result % 1).toString().length-2;
            if (numCommaDecimals > 16){
              setTerm(result.toFixed(1).toString())
            }
            tab[1].includes("-")
              ? setTerm2(`${parseFloat(tab[0])} - (${parseFloat(tab[1])}) =`)
              : setTerm2(`${parseFloat(tab[0])} - ${parseFloat(tab[1])} =`);
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
            } else {
              setTerm(result.toString());
              tab[1].includes("-")
                ? setTerm2(`${parseFloat(tab[0])} / (${parseFloat(tab[1])}) =`)
                : setTerm2(`${parseFloat(tab[0])} / ${parseFloat(tab[1])} =`);
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
          {/* {buttons.map((button) => (
          <Tile id={button.id} mark={button.mark} classname={button.classname} />
        ))} */}

          <Tile
            id="b1"
            mark="Notes"
            className="dark"
            onClick={() => clickHeandler("Notes")}
          />
          <Tile
            id="b2"
            mark="CE"
            className="dark"
            onClick={() => clickHeandler("CE")}
          />
          <Tile
            id="b3"
            mark="C"
            className="dark"
            onClick={() => clickHeandler("C")}
          />
          <Tile
            id="b4"
            mark="⌫"
            className="dark"
            onClick={() => clickHeandler("⌫")}
          />
          <Tile
            id="b5"
            mark="1/x"
            className="dark"
            onClick={() => clickHeandler("1/x")}
          />
          <Tile
            id="b6"
            mark="x²"
            className="dark"
            onClick={() => clickHeandler("x²")}
          />
          <Tile
            id="b7"
            mark="√"
            className="dark"
            onClick={() => clickHeandler("√")}
          />
          <Tile
            id="b8"
            mark="/"
            className="dark"
            onClick={() => clickHeandler("/")}
          />
          <Tile
            id="b9"
            mark="7"
            className="light"
            onClick={() => clickHeandler("7")}
          />
          <Tile
            id="b10"
            mark="8"
            className="light"
            onClick={() => clickHeandler("8")}
          />
          <Tile
            id="b11"
            mark="9"
            className="light"
            onClick={() => clickHeandler("9")}
          />
          <Tile
            id="b12"
            mark="x"
            className="dark"
            onClick={() => clickHeandler("x")}
          />
          <Tile
            id="b13"
            mark="4"
            className="light"
            onClick={() => clickHeandler("4")}
          />
          <Tile
            id="b14"
            mark="5"
            className="light"
            onClick={() => clickHeandler("5")}
          />
          <Tile
            id="b15"
            mark="6"
            className="light"
            onClick={() => clickHeandler("6")}
          />
          <Tile
            id="b16"
            mark="–"
            className="dark"
            onClick={() => clickHeandler("－")}
          />
          <Tile
            id="b17"
            mark="1"
            className="light"
            onClick={() => clickHeandler("1")}
          />
          <Tile
            id="b18"
            mark="2"
            className="light"
            onClick={() => clickHeandler("2")}
          />
          <Tile
            id="b19"
            mark="3"
            className="light"
            onClick={() => clickHeandler("3")}
          />
          <Tile
            id="b20"
            mark="+"
            className="dark"
            onClick={() => clickHeandler("+")}
          />
          <Tile
            id="b21"
            mark="+/-"
            className="light"
            onClick={() => clickHeandler("+/-")}
          />
          <Tile
            disabled={disabled()}
            id="b22"
            mark="0"
            className="light"
            onClick={() => clickHeandler("0")}
          />
          <Tile
            // disabled={disabled}
            id="b23"
            mark=","
            className="light"
            onClick={() => clickHeandler(",")}
          />
          <Tile
            id="b24"
            mark="="
            className="confirm"
            onClick={() => clickHeandler("=")}
            ref={() => clickHeandler("=")}
          />
        </div>
        {alertState ? <CustomAlert /> : null}
      </div>
    </div>
  );
}
