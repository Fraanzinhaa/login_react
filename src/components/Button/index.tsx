import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled}: IButtonProps) => {

  const handleClick = () => {
    if(!disabled) {
      onClick();
    }
  }

  return (
  <ButtonContainer as="button" disabled={disabled} onClick={handleClick}>
    {title}
  </ButtonContainer>
  )
};

export default Button;
