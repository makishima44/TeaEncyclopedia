import s from "./Button.module.css";

type ButtonPropsType = {
  name: string;
  size: "small" | "medium" | "big";
  color: "main" | "secondary";
};

export const Button = ({ name, size, color }: ButtonPropsType) => {
  let sizeButton = "";
  let colorButton = "";
  //----------------------------------------------------------------------//

  switch (color) {
    case "main":
      colorButton = s.mainColor;
      break;
    case "secondary":
      colorButton = s.secondaryColor;
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      sizeButton = s.smallButton;
      break;
    case "medium":
      sizeButton = s.mediumButton;
      break;
    case "big":
      sizeButton = s.bigButton;
      break;
    default:
      break;
  }

  const FinalStyleButton = `${s.button} ${sizeButton} ${colorButton}`;

  return <button className={FinalStyleButton}>{name}</button>;
};
