import React from "react";
import { Button } from "@material-ui/core";

interface DialogButtonProps {
  onClick: () => void;
  startIcon?: React.ReactNode;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined
  variant?: "text" | "outlined" | "contained" | undefined
  children?: React.ReactText;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  style?: {} | undefined;
}

const DialogButton: React.FC<DialogButtonProps> = ({ onClick, startIcon, color, variant, children, fullWidth, type, style }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
      type={type}
      style={style}
    >
      {children}
    </Button>
  );
};

export default DialogButton;
