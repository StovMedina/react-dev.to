import Button from "react-bootstrap/Button";

function ButtonComponent(props) {
  return <Button variant="danger">{props.buttonText}</Button>;
}

export default ButtonComponent;
