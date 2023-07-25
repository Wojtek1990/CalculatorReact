import { Button } from "reactstrap";
import "./Keyboard.css";

export default function Tile(props) {
  return (
    <Button
      id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
      className={`tile${props.className}`}
    >
      {props.mark}
    </Button>
  );
}
