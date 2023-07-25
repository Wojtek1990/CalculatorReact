const keyDownFunc = (id) => {
  let myBtn = document.querySelector(`#${id}`);
  // console.log("func id:", id);
  myBtn.classList.add("active");
  setTimeout(() => {
    myBtn.classList.remove("active");
  }, 100);
};
export const onKeyDownHandler = (e) => {
  switch (e.key) {
    case "Enter":
      clickHeandler("=");
      keyDownFunc("b24");
      console.log(e.key);
      break;
    case "1":
      setInputUpdate(true);
      keyDownFunc("b22");
      setTimeout(() => {
        setInputUpdate(false);
      }, 1);
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      setInputUpdate(true);
      keyDownFunc("b22");
      setTimeout(() => {
        setInputUpdate(false);
      }, 1);
      break;
    case "Backspace":
      clickHeandler("⌫");
  }
};
