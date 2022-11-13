// Types
import { ButtonType } from "../../enums";
// Style
import "./Button.sass";

export const Button = ({
  type = ButtonType.Default,
  label,
  handleClick,
  disabled = false,
  icon,
}: {
  type?: ButtonType;
  label?: string;
  handleClick?: () => void;
  disabled?: boolean;
  icon?: SVGElement;
}) => {
  return (
    <button
      className={`default-button ${type}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <>
        {label && label}
        {icon && icon}
      </>
    </button>
  );
};
