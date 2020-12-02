import { Button } from "@material-ui/core";
import React from "react";

interface DialogButtonProps {
  onClick: () => void;
  startIcon?: React.ReactNode;
  color?: "inherit" | "primary" | "secondary" | "default" | undefined
  variant?: "text" | "outlined" | "contained" | undefined
  children?: React.ReactText;
  fullWidth?: boolean;
}

const DialogButton: React.FC<DialogButtonProps> = ({ onClick, startIcon, color, variant, children, fullWidth }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={startIcon}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
    >
      {children}
    </Button>
  );
};

export default DialogButton;
