export const keyDownFunc = (id) => {
  let myBtn = document.querySelector(`#${id}`);
  // console.log("func id:", id);
  myBtn.classList.add("active");
  setTimeout(() => {
    myBtn.classList.remove("active");
  }, 80);
};

export const onKeyUpHandler = (e) => {
  switch (e.key) {
    case "Enter":
      keyDownFunc("b24");
      // console.log("keycode chuj", e.key);
      break;
    case "0":
      keyDownFunc("b22");
      // console.log("keycode chuj", e.keyCode);

      break;
    case "1":
      keyDownFunc("b17");
      // console.log('case 1:', e.key)
      break;
    case "2":
      keyDownFunc("b18");
      // console.log('case 2:', e.keyCode)

      break;
    case "3":
      keyDownFunc("b19");
      break;
    case "4":
      keyDownFunc("b13");
      break;
    case "5":
      keyDownFunc("b14");
      break;
    case "6":
      keyDownFunc("b15");
      break;
    case "7":
      keyDownFunc("b9");
      break;
    case "8":
      keyDownFunc("b10");
      break;
    case "9":
      keyDownFunc("b11");
      // console.log('case 9:', e.keyCode)
      break;
    case "Backspace":
      keyDownFunc("b4");
      console.log("case backspace:", e.key);

      break;
    case "Delete":
      keyDownFunc("b2");
      console.log("case delete:", e.keyCode);
      break;
    case "+":
      keyDownFunc("b2");
      console.log("case delete:", e.keyCode);
      break;
    default:
      console.log("inny key down niż ustalone");
  }

  // e.key === "Enter" &&  keyDownFunc('b24')
};
